import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = ({setNav}) => {

    const closeNav = () => {
        setNav(false)
    }

  return (
    <div className='bg-black/10 min-h-screen w-full right-0 z-20 absolute'>
        <div className='w-full min-h-screen text-white text-lg flex items-center justify-center bg-gray-600'>
            <ul className='flex flex-col items-center gap-10 text-3xl'>
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