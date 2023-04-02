import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Home from './routes/Home'
import Singin from './routes/Singin'
import Singup from './routes/Singup'

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Singin",
        element: <Singin />
      },
      {
        path: "/Singup",
        element: <Singup />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
