import React from 'react'
import Layout from '../layout/Layout';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import {BsEmojiFrown} from "react-icons/bs"
import { Link } from 'react-router-dom';


const Favorites = () => {
  const products = useSelector(state => state.products.favorites);


  return (
    <section className='min-h-screen py-20'>
      <Layout>
        {products.length === 0 && 
            <div className='flex flex-col items-center justify-center gap-4'>
              <BsEmojiFrown size={100} color="gray"/>
              <h2 className='text-2xl md:text-5xl text-gray-500'>You have no favorite items!</h2>
              <Link to="/products" className='py-2 px-6 bg-black text-white text-lg hover:scale-110 duration-300 shadow-md'
              >
                Go Shopping!
              </Link>
            </div>
        }
        <ul className='my-4 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map(prod => (
                <li key={prod.id}>
                  <Card id={prod.id} title={prod.title} price={prod.price} image={prod.image}  />
                </li>
              ))
          }
        </ul>
      </Layout>
    </section>
  )
}

export default Favorites