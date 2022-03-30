import React from "react";
import "./CartItem.css";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useProviderValue } from "../../context";

const CartItem = ({ id, image, title, count, price, total }) => {
  const { plusProduct, minusProduct, deleteProduct } = useProviderValue();
  return (
    <div className="cart-item">
        <img src={image} alt={title} className="cart-item-image" />
        <p className="cart-item-name">{title}</p>
      <p className="cart-item-price">$ {price}</p>
          <div className='cart-item-btn-container'>
        <button onClick={()=>minusProduct(id)}>-</button><span>{count}</span><button onClick={()=>plusProduct(id)}>+</button>
          </div>
          <span onClick={()=>deleteProduct(id)}><DeleteForeverOutlinedIcon /></span>
      <p className='cart-item-total'>$ { total}</p>
   
    </div>
  );
};

export default CartItem;
