import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { authContextProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <authContextProvider>
      <App />
    </authContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
