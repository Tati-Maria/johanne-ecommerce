import React from 'react'
import {BsEmojiDizzy} from "react-icons/bs"
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

const ErrorElement = () => {
  return (
    <div className='min-h-screen grid place-items-center'>
      <Layout>
        <div className='flex flex-col items-center gap-4'>
          <BsEmojiDizzy size={100} color="gray" />
          <span className='text-4xl block text-center text-gray-500'>Opps! <br />Page not found.</span>
          <Link to="/" className='py-1 px-6 text-lg bg-black border-2 border-black text-white hover:bg-white hover:text-black duration-300'>
          Homepage
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default ErrorElement