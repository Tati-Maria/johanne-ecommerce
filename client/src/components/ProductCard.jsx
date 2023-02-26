import React, { useState } from 'react';
import {BsHeart, BsHeartFill} from "react-icons/bs";
import { addToFavorites, removeFromFavorites } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
        className="object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px] float-left lg:w-[400px] lg:h-[400px] rounded-md" />
        {item.isNew ? <span className='text-sm absolute bg-white py-0.5 px-2 right-1 bottom-8 shadow-sm rounded-md md:text-lg'>New</span> : ''}
        {item.onSale ? <span className='text-sm absolute bg-red-600 text-white py-0.5 px-2 right-1 top-8 shadow-sm rounded-md md:text-lg'>-30%OFF</span> : ''}
        </Link>
        <div className='flex justify-between items-center py-3 px-1'>
        <div className='flex flex-col'>
        <h4 className='text-sm sm:text-base'>{item.name}</h4>
        <p className=' text-sm sm:text-base lg:text-lg font-bold'>£ {item.price}</p>
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
        {toggleFavorites[item.id] ? (<BsHeartFill  color="black" className='text-base md:text-lg' />) : (<BsHeart  className='text-base md:text-xl'/>)}
        </div>
        </div>
      </li>
    ))}
    </>
  )
}

export default ProductCard