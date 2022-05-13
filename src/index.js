import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppProvider from './provider'

import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProvider>
    <Homepage />
  </AppProvider>
)
