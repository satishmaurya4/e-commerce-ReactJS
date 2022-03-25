import React from 'react'
import './Modal.css'

const Modal = ({id, title, image,description, rating, price}) => {
    return (
      <div className='modal'>
      <div className='modal-container'>

          <div className='modal-image'>
              <img src={image} alt='modal image' />
          </div>
          <div className='modal-product'>
              <h2 className='modal-product__title'>{title}</h2>
              <p className='modal-product__price'>{price}</p>
              <div className='modal-rating__container'>
                  <span>{rating.rate}</span><span>{rating.count}</span>

              </div>
              <p className='modal-product__description'>
                  {description}
              </p>
              <div className='modal-button__container'>
                  <button type='button'>add to cart</button>
                  <button type='button'>go to cart</button>
              </div>
        </div>
            </div>
            </div>
  )
}

export default Modal