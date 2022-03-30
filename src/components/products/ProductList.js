import React from 'react'
import './ProductList.css'
import { useProviderValue } from '../../context'
import Product from './Product';
import Loading from '../loading/Loading';
import LeftSide from './LeftSide';

const ProductList = () => {
    const { data, loading } = useProviderValue();
    return (
        <div className='product-page-container'>
            
            <LeftSide />
            {
                loading ? (
                    <>
                    <div className='product-container'>
          {
              data?.map((item) => {
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