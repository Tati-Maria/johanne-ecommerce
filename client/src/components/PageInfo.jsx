import React from 'react'
import { Link } from 'react-router-dom';

const PageInfo = () => {
  return (
    <div className='bg-black h-[50px] relative overflow-hidden'>
      <div className=' text-white py-2'>
          <p className='text'>This is a fictional e-commerce website built by <Link className='text-orange-500' to="https://github.com/Tati-Maria">Maria</Link></p>
      </div>
    </div>
  )
}

export default PageInfo;