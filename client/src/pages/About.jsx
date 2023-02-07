import React from 'react'
import Layout from '../layout/Layout';
import summer from "../assets/images/beach.jpg";
import happy from "../assets/products/green-bikini1.jpg";
import smile from "../assets/images/smile.jpg"

const About = () => {

  const images = [
    {
      id: 1,
      img: summer,
      header: "Who we are",
      small: "Your biggest fans, that's who",
      small1: "READ THE GUIDE"
    },
    {
      id: 2,
      img: smile,
      header: "Our Brand",
      small: "Made by us, loved by you",
      small1: "RIGHT THIS WAY"
    },
    {
      id: 3,
      img: happy,
      header: "The Johanne experience",
      small: "Cos there's so much more to us",
      small1: "DISCOVER IT NOW"
    },
  ];

  return (
    <section className='min-h-screen py-10'>
      <Layout>
        <div className='text-center space-y-4 my-6 pb-6'>
          <h2 className='font-bold text-6xl'>About JOHANNE</h2>
          <p className='font-medium text-xl'>Everything you wanted to know about your fave summer fashion brand.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-6'>
          {images.map(img => (
            <div key={img.id} className="flex flex-col gap-4 items-center">
              <img src={img.img} alt={img.header} className="h-[400px] w-[400px] object-cover"/>
              <div className='text-center space-y-4 '>
                <h4 className='font-bold text-lg'>{img.header}</h4>
                <p>{img.small}</p>
                <button
                className='border-2 border-black py-2 px-5 font-medium hover:bg-black hover:text-white duration-300'
                >
                  {img.small1}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  )
}

export default About;