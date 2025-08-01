import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/reset.css'
import '@styles/index.scss'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>  
        <App />
      </BrowserRouter>
     </Provider>
       
  </StrictMode>,
)
