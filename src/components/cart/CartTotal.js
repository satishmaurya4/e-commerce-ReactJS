import React from 'react'
import { useProviderValue } from '../../context'
import './CartTotal.css'


const CartTotal = () => {
  const { subtotal } = useProviderValue();
  console.log('from subtotal', subtotal)
  return (
      <div>Subtotal: {subtotal}</div>
  )
}

export default CartTotal