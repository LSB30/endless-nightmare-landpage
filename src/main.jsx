import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Globalstyle from './styles/globalstyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyle/>
    <App />
  </React.StrictMode>,
)
