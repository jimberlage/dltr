import "@prefecthq/prefect-design";
import "@prefecthq/prefect-ui-library";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import "@prefecthq/prefect-design/dist/style.css";
import "@prefecthq/prefect-ui-library/dist/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
