import React from 'react'
import { useProviderValue } from '../../context'
import CartItem from './CartItem';
import './CartList.css'


const CartList = () => {
    const { cartItem } = useProviderValue();
    console.log("cart list", cartItem)
  return (
      <div className='cartList-container'>
 
          <div className='cart-header-text'>
              <span>Product</span>
              <div className='cart-header-text-info'>
              <span>Product Name</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Remove</span>
                  <span>Total</span>
                  </div>
          </div>
          <div className='cart-items'>
              {
                  cartItem.map((item,i) => {
                      return (
                          <div key={item.id}>
                              <CartItem  {...item} />
                              {cartItem[cartItem.length - 1] === item ? "" : <hr/>}
                              </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default CartList