import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

get root(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

root(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

element = document.getElementById('root') 
function renderApp() {
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

renderApp()