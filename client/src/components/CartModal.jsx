import {incrementQty, decrementQty, resetCart, removeFromCart} from "../redux/cartSlice";
import {FaTimes} from "react-icons/fa";
import {BsDash, BsPlus} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const CartModal = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    

    return (
        <div className="text-white z-10 absolute right-0 max-w-[500px] h-[300px] overflow-y-scroll bg-slate-600 p-5">
            <h3 className="font-bold text-xl pb-6">Your Cart Items</h3>
            {cartItems.length === 0 && <h4>Empty!</h4>}
            <div className="space-y-10">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                        <div>
                            <img src={item.img} alt={item.name} width={100} />
                        </div>
                        <div className="space-y-2">
                            <h4>{item.name}</h4>
                            <p>£ {item.price}</p>
                            <p>{item.size}</p>
                            <div className="flex items-center px-3 bg-black w-max">
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
                                <button
                                onClick={() => dispatch(removeFromCart(item))} 
                                className="bg-[#FE1C0B] px-4 py-0.5"
                                >
                                    Remove
                                </button>
                        </div>
                        <div>
                        </div>
                    </div>
                ))}
            </div>
            {!cartItems.length === 0 && <button className="bg-black px-4 py-0.5">Reset Cart</button>}
        </div>
    );
};

export default CartModal;