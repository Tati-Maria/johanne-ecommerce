import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Featured = (props) => {

    const products = useSelector(state => state.products.products); 
    const trending = products.filter(prod => prod.featured === true);

  return (
    <div className='my-20'>
        <h2 className='text-4xl py-10 text-center text-gray-700'>Explore More</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {trending.map(trend => (
           
            <div key={trend.id} className="flex flex-col py-6 gap-5 relative">
              <Link to={`/products/${trend.id}`}>
                <img src={trend.img} alt="" className='object-cover float-left w-[400px] h-[400px] rounded-md' />
              </Link>
            <div className='flex justify-between px-1'>
                <h4 className='font-light text-xl'>{trend.name}</h4>
                <p className='font-bold text-xl'>£ {trend.price}</p>
            </div>
            
        </div>
        ))}
        </div>
    </div>
  )
}

export default Featured;