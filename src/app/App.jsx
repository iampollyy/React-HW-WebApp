import React from 'react';
import { CartProvider } from '@context/CartContext';
import { Menu } from '@pages/menuPage/menu.jsx';
import {Layout} from "@ui/layout/Layout.jsx";

const App = () => {
    return (
      <CartProvider>
        <Layout >
        <Menu />
        </Layout>
      </CartProvider>
    );
  }


export default App;