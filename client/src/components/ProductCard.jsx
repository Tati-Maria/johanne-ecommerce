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
        className="object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] float-left lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" />
        {item.onSale ? <span className='text-sm absolute font-light bg-yellow-300 text-black py-0.5 px-2 right-1 top-8 shadow-sm rounded-md md:text-lg'>On Sale</span> : ''}
        </Link>
        <div className='flex justify-between items-center px-1'>
        <div className='flex flex-col'>
        <h4 className='text-sm sm:text-base'>{item.name}</h4>
        <p className=' text-sm sm:text-base lg:text-lg font-light'>
        {item.onSale && <span className=' text-gray-500 text-sm line-through pr-0.5'>£ {item.oldPrice}</span>}
        £ {item.price}
        </p>
        </div>
        <div 
        className='cursor-pointer'
        onClick={() => {
          if(toggleFavorites[item.id]) {
            dispatch(removeFromFavorites(item.id))
          } else {
            handleToggle(item.id)
            dispatch(addToFavorites(item))
          }
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