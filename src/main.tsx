import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './pages/User'
import Home from './pages/Home'
import Settings from './pages/Settings'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:id/exc",
        element: <User />,
      },
      {
        path : "/:id/acc",
        element : <Settings />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
