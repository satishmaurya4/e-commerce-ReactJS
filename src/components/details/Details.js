import React from 'react'
import './Details.css'
import {useProviderValue} from '../../context'
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import { Link } from 'react-router-dom';


const Details = () => {
    const { detailProduct } = useProviderValue();
    const { id, title, price, description, image, inCart,rating } = detailProduct;
    console.log(inCart)
  return (
      <div className='detail-product-container'>
          <div className='detail-product-image'>
              <img src={image} alt={title} />
          </div>
          <div className='detail-product-info'>
              <h2 className='detail-product-title'>{title}</h2>
              <p className='detail-product-description'>{description}</p>
              <span className='price'>Price:<strong>${price}</strong></span>
              <div className='detail-product-rating-container'>
                  <span>{rating?.rate}<StarPurple500RoundedIcon /></span>|<span>{rating?.count} reviews</span>
              </div>
              <div className='detail-product-btn-container'>
                  <Link to='/'><button className='detail-product-btn'>continue shopping</button></Link><button className={inCart ? 'detail-product-inCart-btn' : 'detail-product-btn'} disabled={inCart ? true : false}>{inCart ? 'product in cart' : 'add to cart'}</button>
              </div>
          </div>
      </div>
  )
}

export default Details