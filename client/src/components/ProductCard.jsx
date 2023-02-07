import React, { useState } from 'react';
import {BsHeart, BsHeartFill} from "react-icons/bs";
import { addToFavorites } from '../redux/productSlice';
import { Link, useParams } from 'react-router-dom';
import ErrorElement from '../pages/404';


const ProductCard = ({filteredProducts}) => {
  const[toggleFavorite, setToggleFavorite] = useState(false);
  

  return (
    <>
    {filteredProducts.map(item => (
      <Link key={item.id} to={`/products/${item.id}`}>
        <li>
        <div className='relative'>
        <img 
        src={item.img} 
        alt={item.name} 
        className="object-cover float-left w-[400px] h-[400px] rounded-md" />
        <div 
        className='cursor-pointer absolute -bottom-96 right-1 bg-white/70 p-4 rounded-full' onClick={() => setToggleFavorite(!toggleFavorite)}>
        {toggleFavorite ? (<BsHeartFill size={20} color="red" />) : (<BsHeart size={20}/>)}
        </div>
        </div>
        <div className='flex flex-col py-3 px-1'>
        <h4 className='text-sm'>{item.name}</h4>
        <p className='text-lg font-bold'>£ {item.price}</p>
        </div>
      </li>
      </Link>
    ))}
    </>
  )
}

export default ProductCard