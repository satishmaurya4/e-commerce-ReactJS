import React from 'react'
import './ProductList.css'
import { useProviderValue } from '../../context'
import Product from './Product';

const ProductList = () => {
    const { data } = useProviderValue();
  return (
      <div className='product-container'>
          {
              data?.map((item) => {
                  return (
                      <Product key={item.id} {...item} />
                  )
              })
          }
    </div>
  )
}

export default ProductList