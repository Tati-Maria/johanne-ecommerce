import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Featured = (props) => {

    const products = useSelector(state => state.products.products); 
    const trending = products.filter(prod => prod.featured === true);

  return (
    <div className='my-20'>
        <h2 className='text-2xl md:text-4xl py-10 text-center text-gray-700'>Explore More</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
        {trending.map(trend => (
           
            <div key={trend.id} className="flex flex-col py-6 gap-5 relative">
              <Link to={`/products/${trend.id}`} className='relative'>
                <img src={trend.img} alt="" className='object-cover w-[200px] h-[200px] float-left md:w-[300px] md:h-[300px] rounded-sm lg:w-[400px] lg:h-[400px]' />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 ease-in-out'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='text-white text-2xl md:text-4xl'>View</span>
                </div>
                </div>
              </Link>
            <div className='flex flex-col px-1'>
                <h4 className='font-light text-sm md:text-lg'>{trend.name}</h4>
                <p className='font-bold text-sm md:text-lg'>£ {trend.price}</p>
            </div>
            
        </div>
        ))}
        </div>
    </div>
  )
}

export default Featured;