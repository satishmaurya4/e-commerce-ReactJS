import React from 'react'
import './ProductList.css'
import { useProviderValue } from '../../context'
import Product from './Product';
import Loading from '../loading/Loading';

const ProductList = () => {
    const { showProduct, loading } = useProviderValue();
    return (
        <div className='product-page-container'>
            
            {
                loading ? (
                    <>
                    <div className='product-container'>
          {
              showProduct?.map((item) => {
                  return (
                      <Product key={item.id} {...item} />
                  )
              })
          }
            </div>
                    </>
                ) : <Loading />
            }
      
            </div>
  )
}

export default ProductList