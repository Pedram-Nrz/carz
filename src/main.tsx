import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import {PriceContextProvider} from "./contexts/PriceContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PriceContextProvider>
      <App />
    </PriceContextProvider>
  </StrictMode>,
)
