import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppProvider from 'provider'
import Homepage from 'pages/Homepage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProvider>
    <Homepage />
  </AppProvider>
)
