import React from 'react'
import { useProviderValue } from '../../context'
import './CartTotal.css'


const CartTotal = () => {
  const { totalAmount, clearCart } = useProviderValue();
  const { subtotal, tax, cartTotal } = totalAmount;
  return (
    <div className='cart-total-container'>
      <div className='amount-container'><span className='amount-text'>Subtotal:</span><span className='amount'>$ {subtotal}</span></div>
      <div className='amount-container'><span className='amount-text'>Tax:</span> <span className='amount'>$ {tax}</span></div>
      <div className='amount-container'><span className='amount-text'>Total:</span> <span className='amount'>$ {cartTotal}</span></div>
    <button className='clear-cart-btn' onClick={clearCart}>Clear Cart</button>
      </div>
  )
}

export default CartTotal