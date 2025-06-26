// __tests__/OrderCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import OrderCard from '@entities/orderCard/OrderCard';
import { TCartItem } from '@types';

const meal = {
  Product: {
    id: '1',
    img: 'https://example.com/pizza.jpg',
    meal: 'Pizza',
    price: 10,
  },
  amount: 1,
  category: 'Fast Food',
  area: 'xoxo',
};

const renderWithStore = (quantity = 1) => {
  const item: TCartItem = { ...meal, amount: quantity };
  const preloadedState = {
    cart: [item],
  };
  const store = configureStore({ reducer: { cart: cartReducer }, preloadedState });

  render(
    <Provider store={store}>
      <OrderCard item={item} />
    </Provider>
  );

  return store;
};

describe('OrderCard', () => {
  it('renders meal info and quantity', () => {
    renderWithStore(2);
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10 USD/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });

  it('removes meal on button click', () => {
    const store = renderWithStore(1);
    const removeButton = screen.getByRole('button', { name: /x/i });
    fireEvent.click(removeButton);
    const exists = store.getState().cart.find(item => item.Product.id === meal.Product.id);
    expect(exists).toBeUndefined();
  });

  it('updates amount on input change', () => {
    const store = renderWithStore(1);
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '3' } });
    const updated = store.getState().cart.find(item => item.Product.id === meal.Product.id);
    expect(updated?.amount).toBe(3);
  });
});
