import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Layout from "../layout/Layout";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {addToCart} from "../redux/cartSlice";
import {addToFavorites, removeFromFavorites} from "../redux/productSlice";
import Featured from '../components/Featured';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const {id} = useParams();
  const products = useSelector(state => state.products.products);
  const item = products.find(prod => prod.id === +id);
  if(!id) {
    return null
  }

  const sizes = item.size;
  
  const dispatch = useDispatch();


  return (
    <section className='min-h-screen py-5'>
      <Layout>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/*Images */}
          <div className='flex item-center gap-6'>
            {/*Side Images */}
            <div className='hidden md:flex flex-col gap-4'>
              <img
              className='h-[150px] w-[150px] object-cover float-left' 
              src={item.img} 
              alt={item.name} 
              onClick={() => setSelectedImg(img)} />
              <img
              className='h-[150px] w-[150px] object-cover float-left' 
              src={item.img2} 
              alt={item.name} 
              onClick={() => setSelectedImg(img2)} />
            </div>
            {/*Main Image */}
            <div>
              <img src={item.img} alt={item.name} className="" />
            </div>
          </div>
          {/*Product Info */}
          <div className='space-y-10 pt-5'>
            <div className='space-y-5'>
              <h3 className='font-thin text-3xl'>{item.name}</h3>
              <p className='font-bold text-lg'>£ {item.price}</p>
            </div>
              <ul className='flex items-center gap-6'>
                <span className='text-xl font-semibold'>Sizes:</span> 
              {sizes.map((size) => (
                <li className='text-lg' key={size}>
                  <span className='block text-center'>{size}</span>
                </li>
              ))}
              </ul>
            <div className='flex items-center gap-6'>
            <button
            onClick={() => {
              let prod = null;
              prod = {...item, quantity: 1}
              dispatch(addToCart(item))
            }} 
            className='bg-black text-white py-2 px-6 text-lg border-2 border-black hover:bg-white hover:text-black  duration-300'>
              Add to Cart
            </button>
            <FavoriteBorderOutlinedIcon className='text-black' />
            </div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <Featured />
      </Layout>
    </section>
  )
}

export default Product