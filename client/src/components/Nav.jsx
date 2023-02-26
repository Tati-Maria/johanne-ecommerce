import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {BsCartFill,BsPerson,BsSearch, BsSuitHeartFill} from "react-icons/bs";
import {RxHamburgerMenu} from "react-icons/rx";
import {FaTimes} from "react-icons/fa"
import Layout from "../layout/Layout";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import MobileNav from "./MobileNav";



const Nav = () => {
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);


    //MUI
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));


    return (
        <nav>
            <Layout>
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="focus:text-black hover:text-black">
                    <span 
                    className="flex flex-col font-semibold text-3xl"
                    >
                        Johanne
                    </span>
                    </NavLink>
                    <ul className="hidden lg:flex items-center space-x-10 capitalize">
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">
                                Swimwear
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    {/**Icons */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <BsSearch size={20} />
                        <NavLink to="favorites">
                            <Tooltip title="Favorites">
                                <IconButton>
                                    <BsSuitHeartFill size={20} color="#000" />
                                </IconButton>
                            </Tooltip>
                        </NavLink>
                        <BsPerson size={20} />
                        <div onClick={() => setOpen(!open)}>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={`${cartItems.length}`} color="primary">
                                    <BsCartFill size={20} color="#000"/>
                                </StyledBadge>
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex  items-center gap-4 lg:hidden">
                        <div onClick={() => setOpen(!open)} role="button" tabIndex="0" aria-label="button">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={`${cartItems.length}`} color="primary">
                                    <BsCartFill size={20} color="#000"/>
                                </StyledBadge>
                            </IconButton>
                        </div>
                    <button onClick={() => setNav(!nav)}>
                        <RxHamburgerMenu size={30} />
                    </button>
                    </div>
                </div>
                {open && (<CartModal open={open} setOpen={setOpen} />)}
            </Layout>
            {nav && (<MobileNav nav={nav} setNav={setNav} />)}
        </nav>
    )
}

export default Nav;