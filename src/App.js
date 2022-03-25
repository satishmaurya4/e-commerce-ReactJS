import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import './App.css'
import ProductList from './components/products/ProductList'
import Details from './components/details/Details'
import Cart from './components/cart/Cart'
const App = () => {
  return (
      <BrowserRouter>
          <Nav />
          <div className='app-body'>
              <Routes>
                  <Route path='/' element={<ProductList />} />
                  <Route path='/details' element={<Details />} />
                  <Route path='/cart' element={<Cart />} />
              </Routes>
          </div>
          
      </BrowserRouter>
  )
}

export default App