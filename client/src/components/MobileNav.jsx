import React from 'react';
import { NavLink } from 'react-router-dom';
import hero from "../assets/images/bikini.jpg";

const MobileNav = ({setNav}) => {

    const closeNav = () => {
        setNav(false)
    }

  return (
    <div className='block bg-black/10 min-h-screen  w-full right-0 z-20 absolute lg:hidden'>
        <div
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${hero})`}}  
        className='fixed right-0 bg-cover bg-center w-[50%] min-h-screen text-white text-lg flex items-center justify-center'>
            <ul className='flex flex-col items-center gap-10 text-2xl'>
                <li>
                    <NavLink to="/" onClick={closeNav}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="products" onClick={closeNav}>
                        Store
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
                <li>
                    <NavLink to="favorites" onClick={closeNav}>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileNav;