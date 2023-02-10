import React from 'react'
import Layout from '../layout/Layout';
import {BsEmojiFrown} from "react-icons/bs"

const Cancel = () => {
  return (
    <Layout>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center space-y-5'>
        <div>
          <BsEmojiFrown size={150} className="inline-block"/>
        </div>
        <div>
        <h2 className='text-4xl'>Your order was cancelled!</h2>
        <small className='text-gray-700'>*this is not a real e-commerce store. Just for test purposes only!</small>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cancel;