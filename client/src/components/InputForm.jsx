import React from 'react'

const InputForm = ({title, handleInputChange, nameRef}) => {
  return (
    <fieldset className='flex flex-col gap-2'>
        <label
        className='text-lg md:text-xl' 
        htmlFor="name"
        >{title}
        </label>
        <input
        ref={nameRef}
        onChange={handleInputChange}
        className='border-2 p-2 rounded-full border-neutral-600'
         type="text" id='name' name="name" placeholder='Enter Your Name' required />
    </fieldset>
  )
}

export default InputForm;