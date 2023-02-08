import { createSlice } from "@reduxjs/toolkit";
import pink from "../assets/products/pink-boho.jpg";
import pink2 from "../assets/products/pink-boho2.jpg";
import brown from "../assets/products/aeshetic.jpg";
import brown2 from "../assets/products/aesthetic-boho.jpg";
import beachBag from "../assets/products/beach-bag.jpg";
import beachBag2 from "../assets/products/beach-bag2.jpg";
import bohoFloral from "../assets/products/boho-floral.webp";
import bohoFloral2 from "../assets/products/boho-floral2.webp";
import brownset from "../assets/products/brown-set.jpg";
import brownset2 from "../assets/products/brown-set2.jpg";
import coverDress from "../assets/products/cover-dress.webp";
import coverDress2 from "../assets/products/cover-dress2.webp";
import coverUp from "../assets/products/cover-up.webp";
import coverUp2 from "../assets/products/cover-up2.webp";
import greenBikini from "../assets/products/green-bikini1.jpg";
import greenBikini2 from "../assets/products/green-bikini2.jpg";
import coverD2 from "../assets/products/quimono.webp";
import coverd2 from "../assets/products/quimono1.webp";
import yellowset from "../assets/products/yellow-set2.webp";
import yellowset2 from "../assets/products/yellow-set.webp";
import longsleeve from "../assets/products/longsleeve-cover2.jpg";
import longsleeve2 from "../assets/products/longsleeve-cover.jpg";
import gray from "../assets/products/gray-bathsuit.2webp.webp";
import gray2 from "../assets/products/gray-bathsuit.webp"
import {toast} from "react-toastify"

const initialState = {
    products: [
        {
            id: 1,
            name: "Pink Boho",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 20.99,
            img: pink,
            img2: pink2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 2,
            name: "Stylish Bathsuit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 45.99,
            img: brown,
            img2: brown2,
            isNew: true,
            category: "bikini",
            featured: true,
            trending: false,
            size: ['S', 'M', 'L']
        },
        {
            id: 3,
            name: "Beach Bag",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 35.99,
            img: beachBag,
            img2: beachBag2,
            isNew: true,
            category: "accessories",
            featured: true,
            trending: false,
            size: ['U']
        },
        {
            id: 4,
            name: "Floral Boho",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 35.99,
            img: bohoFloral,
            img2: bohoFloral2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 5,
            name: "Brown Set",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 18.99,
            img: brownset,
            img2: brownset2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 6,
            name: "Cover Up Dress",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 17.99,
            img: coverDress,
            img2: coverDress2,
            isNew: false,
            category: "accessories",
            featured: false,
            trending: true,
            size: ['S', 'M',]
        },
        {
            id: 7,
            name: "Beach Pants",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 59.99,
            img: coverUp,
            img2: coverUp2,
            isNew: true,
            category: "accessories",
            featured: true,
            trending: false,
            size: ['S', 'M', 'L']
        },
        {
            id: 8,
            name: "Green Bikini",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 29.99,
            img: greenBikini,
            img2: greenBikini2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 9,
            name: "Beach Quimono Cover",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 26.99,
            img: coverD2,
            img2: coverd2,
            isNew: false,
            category: "accessories",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 10,
            name: "Yellow Bikini Set",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 16.99,
            img: yellowset,
            img2: yellowset2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: 11,
            name: "Long Sleeve Cover",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 19.99,
            img: longsleeve,
            img2: longsleeve2,
            isNew: false,
            category: "accessories",
            featured: false,
            trending: false,
            size: ['M', 'L']
        },
        {
            id: 12,
            name: "Gray Bathsuit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 19.99,
            img: gray,
            img2: gray2,
            isNew: false,
            category: "bikini",
            featured: false,
            trending: false,
            size: ['S', 'M']
        },
    ],
    favorites: []
}


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
            toast.success("Item added to favorites ❤️", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
                theme: "dark",
            });

        },
        removeFromFavorites: (state, action) => {
            return {
                ...state,
                favorites: state.favorites.filter(product => product.id !== action.payload)
            };
        }
    }
});


export const {addToFavorites, removeFromFavorites} = productSlice.actions;
export default productSlice.reducer;