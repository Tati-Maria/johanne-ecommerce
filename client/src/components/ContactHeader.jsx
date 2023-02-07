import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import smile from "../assets/images/beach.jpg"

const ContactHeader = () => {
  return (
    <div
    className='bg-cover h-[40vh] bg-center flex flex-col py-16' 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${smile})`}}>
        <h2 className='text-white text-center font-semibold text-5xl'>Customer Care</h2>
        <div className='relative p-6'>
        <input
        type="search" 
        name="search" 
        id="search"
        className='w-full p-3 rounded-full'
        placeholder='Search for help' 
        />
        <AiOutlineSearch size={30} className='absolute right-9 top-8' />
        </div>
    </div>
  )
}

export default ContactHeader;