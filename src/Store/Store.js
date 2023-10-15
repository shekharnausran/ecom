import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Slices/dataSlice'
import cartReducer from '../Slices/cartSlice'

const store = configureStore({
    reducer : {
        content : productReducer,
        cart : cartReducer
    }
})

export default store;