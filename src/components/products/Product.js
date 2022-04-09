import React from 'react'
import './Product.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useProviderValue } from '../../context';
import {Link} from 'react-router-dom'

const Product = ({ id, image, price, rating, title, productNotFound }) => {

    const {addToCart,detailHandler } = useProviderValue();
  return (
      <div className='product'>
          <h2 className='product-title'>{title}</h2>
          <div className='product-info'>
          <Link to='/details'>
          <div className='product-image' onClick={()=> detailHandler(id)}>
              <img src={image} alt='product image' />
              </div>
              </Link>
          <p className='product-price'>$ {price}</p>
          <div className='rating-container'>
              <span className='rating'>{rating.rate}< StarOutlineIcon /></span>
              <span className='rating-count'>{rating.count} reviews</span>
          </div>
          <button type='button' onClick={() => addToCart(id)} className='add-to-cart-btn'>
           add to cart
              </button>
              </div>
      </div>
  )
}

export default Product