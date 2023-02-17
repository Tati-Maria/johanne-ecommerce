import {incrementQty, decrementQty, resetCart, removeFromCart} from "../redux/cartSlice";
import {toast} from "react-toastify"
import {FaTimes} from "react-icons/fa";
import {BsDash, BsPlus} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import {loadStripe} from "@stripe/stripe-js";
import { useState } from "react";

//get stripe
let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);
    }

    return stripePromise;
}

//component
const CartModal = ({open, setOpen}) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    

   const items = cartItems?.map(item => {
    return {
        price: item.id,
        quantity: item.quantity
    }
   })

   const checkoutOptions = {
    lineItems: items,
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
   }

   //redirect checkout
   const redirectCheckout = async() => {
    console.log('redirect checkout');
    const stripe = await getStripe();
    const {error} = await stripe.redirectToCheckout(checkoutOptions);
    if(error) {
        toast.error(`${error.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1300
        })
    }


   }
    

    return (
        <>
        <div className="active p-4"  id="cart">
            <div className="flex justify-between mb-6">
                <h3 className="font-bold text-xl">Your Cart Items</h3>
                <button
                onClick={() => {
                    setOpen(!open)
                }}
                className="text-2xl text-red-600"
                >
                    &times;
                </button>
            </div>
            {cartItems.length === 0 && <h4>Empty!</h4>}
            <div className="space-y-10 my-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex flex-row items-center justify-between border-b border-black pb-4">
                        <div>
                            <img src={item.img} alt={item.name} width={100} />
                        </div>
                        <div className="space-y-2 text-center">
                            <h4>{item.name}</h4>
                            <p>£ {item.price}</p>
                            <p>{item.size}</p>
                            <div className="flex items-center gap-3 px-3 bg-black text-white w-max">
                                <button
                                onClick={() => dispatch(decrementQty(item))}
                                >
                                    <BsDash/>
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                onClick={() => dispatch(incrementQty(item))}
                                >
                                    <BsPlus />
                                </button>
                            </div>
                        </div>
                            <button onClick={() => dispatch(removeFromCart(item))}>
                                <FaTimes size={20} color="red" />
                            </button>
                            <p className="hidden md:flex flex-col">Subtotal: <span>£{(item.price * item.quantity).toFixed(2)}</span></p>
                        <div>
                        </div>
                    </div>
                ))}
            </div>
            {cartItems.length > 0 && 
                <div className="flex flex-col-reverse gap-4 space-y-4">
                    <button 
                    onClick={() => dispatch(resetCart())} 
                    className="text-sm hover:underline"
                    >
                        Reset Cart
                    </button>
                    <button
                    onClick={() => {
                        redirectCheckout();
                        setTimeout(() => {
                            dispatch(resetCart());
                        }, 3000)
                    }}
                    className="bg-purple-600 px-10 py-1 w-full lg:w-max lg:mx-auto hover:opacity-90 duration-300"
                    >
                        Pay with Stripe
                    </button>
                    <p>Total: £ <span className="font-bold">{cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0).toFixed(2)}</span></p>
                </div>
            }
            
        </div>
        <div className="overlay active"></div>
        </>
    );
};

export default CartModal;