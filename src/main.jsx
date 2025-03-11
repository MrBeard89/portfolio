import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Preloader from './components/Preloader/Preloader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
