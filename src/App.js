import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import './App.css'
import ProductList from './components/products/ProductList'
import Details from './components/details/Details'
import Cart from './components/cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBody from './components/appBody/AppBody'

const App = () => {
  return (
      <BrowserRouter>
          <Nav />
          <div className='app-body'>
              <Routes>
                  <Route path='/' element={<AppBody/>} />
                  <Route path='/details' element={<Details />} />
                  <Route path='/cart' element={<Cart />} />
              </Routes>
          </div>
          
      </BrowserRouter>
  )
}

export default App