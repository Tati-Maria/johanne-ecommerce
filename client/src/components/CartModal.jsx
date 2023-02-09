import {incrementQty, decrementQty, resetCart, removeFromCart} from "../redux/cartSlice";
import {FaTimes} from "react-icons/fa";
import {BsDash, BsPlus} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const CartModal = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        cartItems.forEach(
            item => total += item.quantity * item.price
        );

        return total.toFixed(2);
    };
    

    return (
        <div className="text-white z-10 absolute top-20 h-96 sm:right-2 overflow-y-scroll bg-slate-500 p-5 flex flex-col justify-between shadow" id="cart">
            <h3 className="font-bold text-xl pb-6">Your Cart Items</h3>
            {cartItems.length === 0 && <h4>Empty!</h4>}
            <div className="space-y-10 my-4">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-10">
                        <div>
                            <img src={item.img} alt={item.name} width={100} />
                        </div>
                        <div className="space-y-2">
                            <h4>{item.name}</h4>
                            <p>£ {item.price}</p>
                            <p>{item.size}</p>
                            <div className="flex items-center gap-3 px-3 bg-black w-max">
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
                            <p className="flex flex-col">Subtotal: <span>£{item.price * item.quantity}</span></p>
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
                    className="bg-purple-600 px-4 py-1 hover:text-purple-600 hover:bg-white duration-300"
                    >
                        Pay with Stripe
                    </button>
                    <p>Total: £<span>{cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)}</span></p>
                </div>
            }
            
        </div>
    );
};

export default CartModal;