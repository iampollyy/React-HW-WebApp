import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import OrderForm from '@ui/forms/orderForm/OrderForm';
import { fireEvent, render, screen } from '@testing-library/react';

const mockUser = {
  uid: '123',
  email: 'test@example.com'
};

const mockCart = [
  {
    Product: { id: 1, price: 10 },
    amount: 2
  }
];

const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      auth: () => ({ user: mockUser }),
      cart: () => mockCart
    }
  });

  return render(<Provider store={store}>{ui}</Provider>);
};

test('submits the form and shows alert with correct data', async () => {
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
  ) as jest.Mock;

  renderWithProviders(<OrderForm />);

  const streetInput = screen.getByPlaceholderText('Enter your street');
  const houseInput = screen.getByPlaceholderText('Enter your house number');
  const submitButton = screen.getByRole('button', { name: /order/i });

  fireEvent.change(streetInput, { target: { value: 'Savanoru' } });
  fireEvent.change(houseInput, { target: { value: '28' } });
  fireEvent.click(submitButton);

  await screen.findByText('Order'); 

  expect(alertMock).toHaveBeenCalledWith('Order placed for Savanoru, house 28');
  alertMock.mockRestore();
});
