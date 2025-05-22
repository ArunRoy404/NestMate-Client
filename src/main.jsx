import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router'
import UniversalProvider from './ContextProviders/UniversalProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UniversalProvider>
      <RouterProvider router={router} />
    </UniversalProvider>
  </StrictMode>,
)
