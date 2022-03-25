import React from "react";
import "./CartItem.css";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useProviderValue } from "../../context";

const CartItem = ({ id, image, title, count, price, total }) => {
  const { addProduct, productTotal } = useProviderValue();
  console.log('count from cart item', count);
  return (
    <div className="cart-item">
        <img src={image} alt={title} className="cart-item-image" />
        <p className="cart-item-name">{title}</p>
      <p className="cart-item-price">$ {price}</p>
          <div className='cart-item-btn-container'>
        <button>-</button><span>{count}</span><button onClick={()=>addProduct(id)}>+</button>
          </div>
          <span><DeleteForeverOutlinedIcon /></span>
      <p className='cart-item-total'>$ { total}</p>
   
    </div>
  );
};

export default CartItem;
