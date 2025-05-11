import React from 'react';
import { CartProvider } from '@context/CartContext';
import {HomePage} from "@pages/homePage/HomePage";
import { Layout } from "@ui/layout/Layout.jsx";

const App = () => {
    return (
      <CartProvider>
        <Layout>
            <HomePage/>
        </Layout>
      </CartProvider>
    );
  }


export default App;