import { createSlice } from "@reduxjs/toolkit";
import pink from "../assets/products/product-2.webp";
import pink2 from "../assets/products/product-22.webp";
import brown from "../assets/products/product-1.webp";
import brown2 from "../assets/products/product-11.webp";
import beachBag from "../assets/products/beach-bag.jpg";
import beachBag2 from "../assets/products/beach-bag2.jpg";
import bohoFloral from "../assets/products/boho-floral.webp";
import bohoFloral2 from "../assets/products/boho-floral2.webp";
import brownset from "../assets/products/red.webp";
import brownset2 from "../assets/products/red2.webp";
import coverDress from "../assets/products/cover-dress.webp";
import coverDress2 from "../assets/products/cover-dress2.webp";
import coverUp from "../assets/products/cover-up.webp";
import coverUp2 from "../assets/products/cover-up2.webp";
import greenBikini from "../assets/products/product-3.webp";
import greenBikini2 from "../assets/products/prodcut-33.webp";
import coverD2 from "../assets/products/quimono.webp";
import coverd2 from "../assets/products/quimono1.webp";
import yellowset from "../assets/products/yellow-set2.webp";
import yellowset2 from "../assets/products/yellow-set.webp";
import longsleeve from "../assets/products/product-4.webp";
import longsleeve2 from "../assets/products/product-44.webp";
import gray from "../assets/products/gray-bathsuit.2webp.webp";
import gray2 from "../assets/products/gray-bathsuit.webp"
import {toast} from "react-toastify"

const initialState = {
    products: [
        {
            id: "price_1MZzY6FQlqGn9YIntqa7kPjf",
            name: "Pink Set Cali",
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
            id: "price_1MZzZQFQlqGn9YIn8VzZOvzC",
            name: "Stylish Bikini Set",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 45.99,
            img: brown2,
            img2: brown,
            isNew: true,
            category: "bikini",
            featured: true,
            trending: false,
            size: ['S', 'M', 'L']
        },
        {
            id: "price_1MZza3FQlqGn9YIn9WwKRvbS",
            name: "Beach Bag",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 35.99,
            img: beachBag,
            img2: beachBag2,
            isNew: false,
            category: "accessories",
            featured: false,
            trending: false,
            size: ['U']
        },
        {
            id: "price_1MZzaTFQlqGn9YInYuxAAX9R",
            name: "Floral Boho",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 35.99,
            img: bohoFloral,
            img2: bohoFloral2,
            isNew: true,
            category: "bikini",
            featured: false,
            trending: false,
            size: ['S', 'M', 'L']
        },
        {
            id: "price_1MZzaqFQlqGn9YInTg1ZzXiy",
            name: "Red Set",
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
            id: "price_1MZzbEFQlqGn9YInZTUpzVMN",
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
            id: "price_1MZzbhFQlqGn9YIn0yBSeciQ",
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
            id: "price_1MZzc8FQlqGn9YInJtWqv2rZ",
            name: "Blue Set Cali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 29.99,
            img: greenBikini2,
            img2: greenBikini,
            isNew: true,
            category: "bikini",
            featured: false,
            trending: true,
            size: ['S', 'M', 'L']
        },
        {
            id: "price_1MZzdKFQlqGn9YInFJeLbdc2",
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
            id: "price_1MZzcrFQlqGn9YInh99W87Yy",
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
            id: "price_1MZzh1FQlqGn9YInO18xk4LY",
            name: "Bathsuit Classic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 19.99,
            img: longsleeve,
            img2: longsleeve2,
            isNew: false,
            category: "bikini",
            featured: true,
            trending: false,
            size: ['M', 'L']
        },
        {
            id: "price_1MZzhbFQlqGn9YIn5tp8QJs2",
            name: "Gray Bathsuit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 19.99,
            img: gray,
            img2: gray2,
            isNew: true,
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