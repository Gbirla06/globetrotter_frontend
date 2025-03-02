// Importing necessary modules from React and ReactDOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importing the main stylesheet
import './index.css'

// Importing the main App component
import App from './App.jsx'

// Creating a root element and rendering the App component within StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
