import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
    cartItems: []
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const item = action.payload;
            let productItem = state.cartItems.find(product => product.id === item.id);

            //chech if the product is already in cart to be updated
            if(productItem) {
                productItem += 1;
                toast.success("Item updated", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
            } else {
                state.cartItems = [item, ...state.cartItems];
                toast.success("Added to cart successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                })
            }
        },
        incrementQty: (state, action) => {
            const item = action.payload;
            let productItem = state.cartItems.find(product => 
                product.id === item.id
            );

            if(productItem) {
                productItem.quantity += 1
            }
        },
        decrementQty: (state, action) => {
            const item = action.payload;
            let productItem = state.cartItems.find(product => 
                product.id === item.id
            );

            if(productItem) {
                productItem.quantity -= 1;
                //if the number is negative the item must be removed
            } else if(productItem.quantity === 0) {
                state.cartItems = state.cartItems.filter(product => product.id !== item.id);
            }
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter(product => product.id !== item.id);
            toast.success("Item successfuly removed", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose:1500,
                transition: "flip",
                theme: "light"
            })
        },
        resetCart: (state) => {
            state.cartItems = [];
        }
    }
});

export const {addToCart, removeFromCart, incrementQty, decrementQty,resetCart} = cartSlice.actions;

export default cartSlice.reducer;
