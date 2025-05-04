import React, { Component } from 'react';
import { CartProvider } from '@context/CartContext';
import { Menu } from '@pages/menuPage/menu.jsx';
import {Layout} from "@ui/layout/Layout.jsx";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Layout >
        <Menu />
        </Layout>
      </CartProvider>
    );
  }
}

export default App;