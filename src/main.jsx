import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider } from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextProvider>
      <Router>          
        <App /> 
      </Router>   
    </ContextProvider>         
 
   
  </StrictMode>,
)
