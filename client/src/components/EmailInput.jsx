import React from 'react'

const EmailInput = ({title, handleInputChange, emailRef}) => {
  return (
    <fieldset className='flex flex-col gap-2 my-5'>
        <label
        className='text-xl ' 
        htmlFor="email"
        >
          {title}
        </label>
        <input
          ref={emailRef}
          type='email'
          name='email'
          id='email' 
          placeholder='Enter Your Email'
          onChange={handleInputChange}
          required
          className="border-2 p-2 rounded-full border-neutral-600"
          />
    </fieldset>
  )
}

export default EmailInput