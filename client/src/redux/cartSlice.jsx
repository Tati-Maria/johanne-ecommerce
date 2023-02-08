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
            let productItem = state.cartItems.find(prod => prod.id === item.id);

            //check if the have been added to cart
            if(productItem) {
                productItem.quantity += 1;
                toast.success("Item updated", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });
            } else {
                state.cartItems = [{...item, quantity: 1}, ...state.cartItems];
                toast.success("Added to cart successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                })
            }
        },
        incrementQty: (state, action) => {
            const item = action.payload;
            let productItem = state.cartItems.find(prod => prod.id === item.id);
            if(productItem) {
                productItem.quantity += 1;
            } 
        },
        decrementQty: (state, action) => {
            const item = action.payload;
            let productItem = state.cartItems.find(prod => prod.id === item.id);
            if(productItem) {
                if(productItem.quantity > 1) {
                    productItem.quantity -= 1
                } else {
                    toast.warning("Quantity can not be negative", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                        
                    });
                }
            }
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter(prod => prod.id !== item.id);
            toast.success('Item successfully removed', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            })
        },
        resetCart: (state) => {
            state.cartItems = [];
        }
    }
});

export const {addToCart, removeFromCart, incrementQty, decrementQty,resetCart} = cartSlice.actions;

export default cartSlice.reducer;
