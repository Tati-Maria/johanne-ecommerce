import React from 'react';

const TextForm = ({title, handleInputChange, messageRef}) => {
  return (
    <fieldset className='flex flex-col gap-2 my-5'>
        <label
        className='text-lg md:text-xl' 
        htmlFor='message'>{title}</label>
        <textarea 
        ref={messageRef}
        name='message'
        id='message'
        cols="30" 
        rows="10" 
        placeholder='Enter your message'
        onChange={handleInputChange}
        required
        className="border-2 p-2 rounded border-neutral-600 w-full"
          />
    </fieldset>
  )
}

export default TextForm;