import React from 'react'

const Box = ({price, name}) => {
  return (
    <div className='bg-white/25 font-light p-4  rounded-md shadow-black absolute bottom-10 right-10'>
        <h2 className='text-lg font-normal'>{name}</h2>
        <p>£ {price}</p>
    </div>
  )
}

export default Box