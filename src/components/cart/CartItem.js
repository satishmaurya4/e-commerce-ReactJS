import React from "react";
import "./CartItem.css";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { useProviderValue } from "../../context";

const CartItem = ({ id, image, title, count, price, total }) => {
  const { plusProduct, minusProduct, deleteProduct } = useProviderValue();
  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item-image" />
      <div className="cart-item-info">
        <p className="cart-item-name">{title}</p>
      <p className="cart-item-price"><span className="cart-item-price-text">Price:</span>$ {price}</p>
          <div className='cart-item-btn-container'>
        <button onClick={()=>minusProduct(id)}><KeyboardArrowDownSharpIcon /></button><span>{count}</span><button onClick={()=>plusProduct(id)}><KeyboardArrowUpSharpIcon /></button>
          </div>
          <span onClick={()=>deleteProduct(id)} className='delete-icon-container'><DeleteForeverOutlinedIcon /></span>
      <p className='cart-item-total'><span className="cart-item-total-text">Total:</span>$ { total}</p>
      </div>
    </div>
  );
};

export default CartItem;
