import React, {useState} from 'react'
import './LeftSide.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import StarIcon from '@mui/icons-material/Star';
import {useProviderValue} from '../../context'

const LeftSide = () => {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('all products')

  const { data, setShowProduct } = useProviderValue();

  const searchProductByName = (e) => {
    let inputValue = e.target.value.toLowerCase().trim();
    let modifiedValue = inputValue.toLowerCase().trim();
    const filteredValue = data.filter((item) => {
      let itemTitle = item.title.toLowerCase();

      return itemTitle.includes(modifiedValue) === true;
    })
    setInput(e.target.value);
    setShowProduct(filteredValue);
    
  }

  const searchProductByCategory = (e) => {
    const itemCategory = e.target.value;
    const filteredValue = data.filter((item) => item.category === itemCategory);
    if (itemCategory === "all products") {
      setShowProduct(data);
    } else {
      setShowProduct(filteredValue)
    }
    setSelect(e.target.value);
  }
  
  const sortByAscendingPrice = () => {
    data.sort((a, b) => {
      return a.price - b.price;
    })
    setShowProduct(data)
    console.log(data)
  }
  
  const sortByDescendingPrice = () => {
    data.sort((a, b) => {
      return b.price - a.price;
    })
    setShowProduct(data)
    console.log(data)
  }











  return (
    <div className='left-side-container'>
      <input type='text' className='input' value={input} onChange={searchProductByName} placeholder='search product by name...' />
      <div className='category-container'>
      <p>Category</p>
      <select className='product-category-select' value={select} onChange={searchProductByCategory}>
        <option>all products</option>
        <option>men's clothing</option>
        <option>jewelery</option>
        <option>electronics</option>
        <option>women's clothing</option>
        </select>
      </div>
      <div className='sort-price'>
        <span>sort by price</span><span onClick={sortByAscendingPrice}><ArrowCircleUpIcon /></span><span onClick={sortByDescendingPrice}><ArrowCircleDownIcon /></span>
      </div>
      <div className='star-container'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        
      </div>
    </div>
  )
}

export default LeftSide