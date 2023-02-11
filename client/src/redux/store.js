import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer, { savedCartItems } from "./cartSlice";

export const store = configureStore({
   reducer: {
    products: productReducer,
    cart: cartReducer
   },
   preloadedState: {
      cart: {cartItems: savedCartItems},
   }   
});

store.subscribe(() => {
   localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
});
