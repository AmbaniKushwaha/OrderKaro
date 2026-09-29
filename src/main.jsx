import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Product from '../Pages/Product.jsx'
import Cart from '../Pages/Cart.jsx'
import Search from '../Pages/Search.jsx'

 const router = createBrowserRouter([
    {
        path : "/", element : <App/>
    },
    {
        path : "/product", element : <Product/>
    },
    {
        path : "/cart", element : <Cart/>
    },
    {
        path : "/s", element : <Search/>
    }
  ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router ={router}/>
  </StrictMode>
)
