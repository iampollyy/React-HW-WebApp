import React from 'react';
import { CartProvider } from '@context/CartContext';
import {HomePage} from "@pages/homePage/HomePage";
import { Layout } from "@ui/layout/Layout.jsx";
import {MenuPage} from "@pages/menuPage/MenuPage";

const App = () => {
    return (
      <CartProvider>
        <Layout>
            <HomePage/>
            <MenuPage/>
        </Layout>
      </CartProvider>
    );
  }


export default App;