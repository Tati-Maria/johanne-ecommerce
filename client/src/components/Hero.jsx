import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const Hero = () => {
  return (
    <section className='flex flex-col justify-center  text-yellow-200'>
        <Layout>
        <div className='flex items-center flex-col space-y-10'>
            <h1 className='text-center font-medium capitalize text-5xl md:text-5xl lg:text-6xl'>
                Shop Our Newest Collection
            </h1>
            <small className='text-center block text-base'>Johanne Summer Bikini <span className='italic font-thin'>2023</span></small>
            <div className='font-semibold text-base lg:text-lg'>
                <Link to="products" className='uppercase'>
                    <button className='border-2 py-2 px-6 rounded-sm h duration-300 hover:bg-black text-base md:text-xl '>
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
        </Layout>
    </section>
  )
}

export default Hero;