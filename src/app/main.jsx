import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/reset.css'
import '@styles/index.scss'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@context/AuthContext.jsx'
import { CartProvider } from '@context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <CartProvider>
                    <App />
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
  </StrictMode>,
)
