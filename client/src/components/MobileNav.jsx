import React from 'react';
import { NavLink } from 'react-router-dom';


const MobileNav = ({setNav, nav}) => {

    const closeNav = () => {
        setNav(false)
    }

  return (
    
        <div 
        className={`side-bar ${nav ? 'visible' : ''}`}>
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
    
  )
}

export default MobileNav;