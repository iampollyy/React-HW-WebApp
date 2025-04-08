import React, { Component } from 'react';
import { CartProvider } from '@context/CartContext';
import { Menu } from '@pages/menuPage/menu.jsx';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Menu />
      </CartProvider>
    );
  }
}

export default App;