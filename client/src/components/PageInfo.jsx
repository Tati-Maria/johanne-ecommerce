import React from 'react'
import { Link } from 'react-router-dom';

const PageInfo = () => {
  return (
    <div className='bg-black text-white text-center text-sm py-2'>
        <p>This is a fictional e-commerce website built by <Link className='text-orange-500' to="https://github.com/Tati-Maria">Maria</Link></p>
    </div>
  )
}

export default PageInfo