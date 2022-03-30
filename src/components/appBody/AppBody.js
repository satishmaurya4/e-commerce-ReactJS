import React from 'react'
import './AppBody.css'
import LeftSide from './LeftSide'
import ProductList from '../products/ProductList'

const AppBody = () => {
  return (
      <div className='appbody-container'>
          <LeftSide />
          <ProductList />
    </div>
  )
}

export default AppBody