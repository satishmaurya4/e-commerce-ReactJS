import React from "react";
import { useProviderValue } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import './Cart.css'


const Cart = () => {

  const { cartItem } = useProviderValue();
  return (
    <div className='cart-container'>
      
      <h1 className="cart-title">{cartItem.length === 0 ? 'your cart is empty' : 'your cart'}</h1>
      
      {
        cartItem.length > 0 && <>
        <CartList />
        <CartTotal />
        
        </>
     }
          
        
    </div>
  );
};

export default Cart;
