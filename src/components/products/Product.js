import React, { useState } from 'react'
import './Product.css'
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import { useProviderValue } from '../../context';
import Modal from '../modal/Modal'
import {Link} from 'react-router-dom'

const Product = ({ id, category, description, image, price, rating, title, inCart }) => {

    const { data,getItem, addToCart,detailHandler } = useProviderValue();
console.log('from product')
  return (
      <div className='product'>
          <h2 className='product-title'>{title}</h2>
          <Link to='/details'>
          <div className='product-image' onClick={()=> detailHandler(id)}>
              <img src={image} alt='product image' />
              </div>
              </Link>
          <p className='product-price'>$ {price}</p>
          <div className='rating-container'>
              <span className='rating'>{rating.rate}<StarPurple500RoundedIcon /></span>
              <span className='rating-count'>{rating.count} reviews</span>
          </div>
          <button type='button' onClick={() => addToCart(id)} disabled={!inCart?false:true }className={inCart ? 'in-cart':'add-to-cart-btn'}>
              {!inCart ? 'add to cart' : 'product in cart'}
          </button>
         
         
      </div>
  )
}

export default Product