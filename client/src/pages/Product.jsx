import React, { useEffect, useState } from 'react';
import Layout from "../layout/Layout";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {addToCart} from "../redux/cartSlice";
import Featured from '../components/Featured';
import { toast } from 'react-toastify';

const Product = () => {
  const {id} = useParams();
  const products = useSelector(state => state.products.products);
  const item = products.find(prod => prod.id === id);
  const [selectedImg, setSelectedImg] = useState(item ? item.img : null)
  const [selectedSize, setSelectedSize] = useState(null);
  
  useEffect(() => {
    if(item) {
      setSelectedImg(item.img);
      setSelectedSize(null)
    }
  }, [id, item])
  
  if(!id) {
    return null;
  }

  const sizes = item.size;
  
  const handleSizeChoice = (size) => {
    setSelectedSize(size)
  }
  
  const dispatch = useDispatch();


  return (
    <section className='min-h-screen py-5'>
      <Layout>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/*Images */}
          <div className='flex item-center gap-6 flex-col-reverse lg:flex-row'>
            {/*Side Images */}
            <div className='flex flex-row lg:flex-col  gap-4'>
              <img
              className='w-[100px] h-[100px] md:h-[150px] md:w-[200px]  lg:h-[150px] lg:w-[500px] object-cover float-left cursor-pointer' 
              src={item.img} 
              alt={item.name} 
              onClick={() => setSelectedImg(item.img)} />
              <img
              className='w-[100px] h-[100px] md:h-[150px] md:w-[200px] lg:h-[150px] lg:w-[500px] object-cover float-left cursor-pointer' 
              src={item.img2} 
              alt={item.name} 
              onClick={() => setSelectedImg(item.img2)} />
            </div>
            {/*Main Image */}
            <div>
              <img src={selectedImg} alt={item.name} />
            </div>
          </div>
          {/*Product Info */}
          <div className='space-y-10 pt-5'>
            <div className='space-y-5'>
              <div className='border border-gray-400 p-2 w-max'>
              {item.isNew ? <span className='text-sm uppercase'>New</span> : item.onSale ? <span className='text-sm uppercase'>-30%OFF</span> : null}
              </div>
              <h3 className='font-light text-xl  md:text-3xl'>{item.name}</h3>
              <p className='text-gray-400'>{item.desc}</p>
              <p className='text-base md:text-xl font-light'>
              {item.onSale ? (<span className='font-normal line-through text-gray-400 text-sm'>£ {item.price}</span>) : <span>£ {item.price}</span>}
              {item.onSale && (<span className='text-red-500'> £ {(item.price * 0.7).toFixed(2)}</span>)}
              </p>
            </div>
              <ul className='flex items-center gap-6'>
                <span className='text-lg md:text-xl font-semibold'>Sizes:</span> 
              {sizes.map((size) => (
                <li className='text-base md:text-lg' key={size}>
                  <span
                  onClick={() => handleSizeChoice(size)}
                  className='block text-center cursor-pointer hover:text-blue-600'
                  >{size}</span>
                </li>
              ))}
              </ul>
            <div className='flex items-center gap-6'>
            <button
            onClick={() => {
              if (selectedSize) {
                let prod = null;
                const chosenSize = selectedSize;
                prod = { ...item, quantity: 1, size: chosenSize };
                dispatch(addToCart(prod));
              } else {
                toast.warn('Please select a size before adding to cart', {
                  position: toast.POSITION.TOP_RIGHT,
                  autoClose: 2000,
                  theme: 'dark'
                });
              }
            }}
            className='bg-black text-white py-2 px-6 text-sm md:text-lg border-2 border-black hover:bg-white hover:text-black duration-300 active:shadow-sm focus:shadow-sm'>
              Add to Cart
            </button>
            </div>
            
          </div>
        </div>
        <Featured />
      </Layout>
    </section>
  )
}

export default Product