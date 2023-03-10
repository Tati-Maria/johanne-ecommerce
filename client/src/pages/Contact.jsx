import React, {useState, useRef} from 'react'
import ContactHeader from '../components/ContactHeader';
import Layout from '../layout/Layout';
import InputForm from "../components/InputForm";
import EmailInput from "../components/EmailInput";
import TextForm from "../components/TextForm";
import {toast} from "react-toastify"
import Questions from '../components/Questions';

const Contact = () => {

  const [formData, setFormData] = useState({})
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Thanks for contacting us!', {
        autoClose: 1500,
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark'
      })
      setSubmitting(false);
      setFormData({}) //reset the formData
      nameRef.current.value = ''; //Clear the name 
      messageRef.current.value = '';//clear message
      emailRef.current.value = '';//clear email
    }, 2000);
  }

  

  return (
    <section className='min-h-screen'>
      <Layout>
        <ContactHeader />
        <form 
        className='my-12'
        onSubmit={handleSubmit}>
          <legend className='font-semibold text-2xl py-10'>Contact Us</legend>
          <div className='flex items-center gap-0 flex-col lg:flex-row lg:gap-10'>
            <div className='w-full'>
            <InputForm nameRef={nameRef} title="Name" handleInputChange={handleInputChange}/>
            <EmailInput emailRef={emailRef} title="Email" handleInputChange={handleInputChange} />
            </div>
            <div className='w-full'>
            <TextForm messageRef={messageRef} title="Message" handleInputChange={handleInputChange} />
            </div>
          </div>
          <button
          className='disabled:bg-gray-400 disabled:hover:shadow-none w-[100px] h-[40px] rounded-full bg-black text-white hover:shadow-md hover:shadow-slate-600 duration-300' 
          type='submit'
          disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <h2 className='text-4xl font-semibold text-center'>FAQ</h2>
        <Questions />
      </Layout>
    </section>
  )
}

export default Contact;