import React, { useState } from 'react';
import {BsHeart, BsHeartFill} from "react-icons/bs";
import { addToFavorites, removeFromFavorites } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import ErrorElement from '../pages/404';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({filteredProducts}) => {
  const[toggleFavorites, setToggleFavorites] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = id => {
    setToggleFavorites(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <>
    {filteredProducts.map(item => (
      <li key={item.id} className="flex flex-col">
        <Link to={`/products/${item.id}`} className="flex flex-col py-6 gap-2 relative">
        
        <img 
        src={item.img} 
        alt={item.name} 
        className="object-cover float-left w-[400px] h-[400px] rounded-md" />
        {item.isNew ? <span className='absolute bg-white py-0.5 px-2 left-1 top-8 shadow-sm rounded-md'>New</span> : ''}
        </Link>
        <div className='flex justify-between items-center py-3 px-1'>
        <div className='flex flex-col'>
        <h4 className='text-sm'>{item.name}</h4>
        <p className='text-lg font-bold'>£ {item.price}</p>
        </div>
        <div 
        className='cursor-pointer'
        onClick={() => {
          if(!toggleFavorites[item.id]) {
            dispatch(addToFavorites({
              id: item.id,
              title: item.name,
              price: item.price,
              image: item.img
            }));
          } else {
            dispatch(removeFromFavorites(item.id))
          }
          handleToggle(item.id);
        }}
        >
        {toggleFavorites[item.id] ? (<BsHeartFill size={20} color="black" />) : (<BsHeart size={20}/>)}
        </div>
        </div>
      </li>
    ))}
    </>
  )
}

export default ProductCard