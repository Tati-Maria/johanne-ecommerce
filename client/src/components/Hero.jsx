import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const Hero = () => {
  return (
    <section className='flex flex-col justify-center  text-white'>
        <Layout>
        <div className='flex items-center flex-col space-y-10'>
            <h1 className='text-center font-bold capitalize text-4xl md:text-5xl lg:text-6xl'>
                Shop Our Newest Collection
            </h1>
            <small className='text-center block text-base'>Johanne Summer Bikini <span className='italic font-thin'>2023</span></small>
            <div className='font-semibold text-base lg:text-lg'>
                <Link to="products" className='uppercase'>
                    <button className='bg-white text-black py-3 px-10 border-[3px] border-t-violet-500 border-b-pink-400 border-r-lime-400 border-l-fuchsia-400 hover:bg-black hover:text-white duration-300'>
                        Shop Bikini
                    </button>
                </Link>
            </div>
        </div>
        </Layout>
    </section>
  )
}

export default Hero;