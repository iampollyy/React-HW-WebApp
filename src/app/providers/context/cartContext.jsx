
import React, { Component, createContext } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem('cart')) || {},
  };

  addToCart = (id, amount) => {
    this.setState((prevState) => {
      const updatedCart = {
        ...prevState.cart,
        [id]: (prevState.cart[id] || 0) + amount,
      };
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => {
      const updatedCart = { ...prevState.cart };
      delete updatedCart[id];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  };

  render() {
    return (
      <CartContext.Provider value={{
        cart: this.state.cart,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
      }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
