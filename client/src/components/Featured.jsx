import React from 'react'
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

const Featured = (props) => {

    const products = useSelector(state => state.products.products); 
    const trending = products.filter(prod => prod.isNew === true);

  return (
    <div className='my-16'>
        <h2 className='text-4xl py-10 text-center'>New Arrivals</h2>
        <div className='flex items-center flex-col-reverse justify-between lg:flex-row-reverse'>
        {trending.map(trend => (
           
            <div key={trend.id} className="flex flex-col py-6 gap-2 relative">
            <img src={trend.img} alt="" className='w-[300px] h-[300px] object-cover float-left' />
            <span className='absolute bg-white py-0.5 px-2 left-1 top-8 shadow-sm'>New</span>
            <div className='flex justify-between px-1'>
                <h4 className='font-thin'>{trend.name}</h4>
                <p className='font-medium'>£ {trend.price}</p>
            </div>
            
        </div>
        ))}
        </div>
    </div>
  )
}

export default Featured;