import React from 'react'
import {BsEmojiLaughing} from "react-icons/bs"
import Layout from '../layout/Layout';

const Success = () => {
  return (
    <Layout>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center space-y-5'>
        <div>
          <BsEmojiLaughing size={150} className="inline-block text-green-500"/>
        </div>
        <div>
        <h2 className='text-4xl text-green-500'>Thanks for shopping with us!</h2>
        <p className='text-xl'>Your order was placed successfully.</p>
        <small className='text-gray-700'>*this is not a real store. Just for test purposes only!</small>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Success;