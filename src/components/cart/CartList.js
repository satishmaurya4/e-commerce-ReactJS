import React from 'react'
import { useProviderValue } from '../../context'
import CartItem from './CartItem';
import './CartList.css'


const CartList = () => {
    const { cartItem } = useProviderValue();
  return (
      <div className='cart-container'>
 
          <div className='cart-header-text'>
              <span>Product</span>
              <span>Product Name</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Remove</span>
              <span>Total</span>
          </div>
          <div className='cart-items'>
              {
                  cartItem.map((item) => {
                      return (
                          <CartItem key={item.id} {...item}/>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default CartList