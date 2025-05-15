import React from 'react';
import { CartProvider } from '@context/CartContext';
import { Layout } from "@ui/layout/Layout.jsx";
import {AppRoutes} from "@routes/appRoutes";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "@context/AuthContext";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
            <CartProvider>
                <Layout>
                    <AppRoutes />
                </Layout>
            </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
  }


export default App;