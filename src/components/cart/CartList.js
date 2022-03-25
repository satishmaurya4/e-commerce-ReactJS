import React from 'react'
import { useProviderValue } from '../../context'
import CartItem from './CartItem';
import './CartList.css'


const CartList = () => {
    const { cart } = useProviderValue();
    console.log('from cart list',cart)
  return (
      <div className='cart-container'>
          {console.log('return from cart list')}
          <h1 className='cart-title'>your cart</h1>
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
                  cart.map((item) => {
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