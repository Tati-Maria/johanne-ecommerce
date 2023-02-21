import React from 'react';
import { NavLink } from 'react-router-dom';


const MobileNav = ({setNav}) => {

    const closeNav = () => {
        setNav(false)
    }

  return (
    <div className='block bg-black/10 min-h-screen  w-full right-0 z-20 absolute lg:hidden'>
        <div 
        className='fixed right-0 top-0 bg-cover bg-center w-[40%] min-h-screen text-lg  bg-white'>
            <span id="close" className='text-red-600 text-4xl cursor-pointer block text-right pr-10 pt-10 ' onClick={closeNav} role='button'>&times;</span>
            <ul className='flex flex-col items-end gap-10 w-full pr-10 pt-20 text-sm md:text-base'>
                <li>
                    <NavLink to="/" onClick={closeNav}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="products" onClick={closeNav}>
                        Swimwear
                    </NavLink>
                </li>
                <li>
                    <NavLink to="favorites" onClick={closeNav}>
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" onClick={closeNav}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contact" onClick={closeNav}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav;