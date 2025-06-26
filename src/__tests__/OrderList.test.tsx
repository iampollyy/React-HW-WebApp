import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import OrderList from '@entities/orderList/OrderList';
import OrderCard from '@entities/orderCard/OrderCard';

jest.mock('@entities/orderCard/OrderCard', () => (props: any) => (
  <div data-testid="order-card" data-item={JSON.stringify(props.item)} />
));

jest.mock('@hooks/useAppSelector', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockStore = configureMockStore();
const useAppSelectorMock = jest.requireMock('@hooks/useAppSelector').default;

describe('OrderList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders empty cart message when cart is empty', () => {
    useAppSelectorMock.mockReturnValue([]);
    
    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.queryByTestId('order-card')).not.toBeInTheDocument();
  });

  it('renders OrderCard components when cart has items', () => {
    const mockCartItems = [
      { Product: { id: 1, name: 'Product 1' }, quantity: 2 },
      { Product: { id: 2, name: 'Product 2' }, quantity: 1 },
    ];
    
    useAppSelectorMock.mockReturnValue(mockCartItems);

    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    const orderCards = screen.getAllByTestId('order-card');
    expect(orderCards).toHaveLength(mockCartItems.length);
    
    mockCartItems.forEach((item, index) => {
      expect(orderCards[index]).toHaveAttribute('data-item', JSON.stringify(item));
    });
    
    expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
  });

  it('passes correct props to OrderCard components', () => {
    const mockCartItem = { Product: { id: 3, name: 'Test Product' }, quantity: 1 };
    useAppSelectorMock.mockReturnValue([mockCartItem]);

    render(
      <Provider store={mockStore({})}>
        <OrderList />
      </Provider>
    );

    const orderCard = screen.getByTestId('order-card');
    expect(orderCard).toHaveAttribute('data-item', JSON.stringify(mockCartItem));
  });
});