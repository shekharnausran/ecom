import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart : [],
        cartCount : 0,
        totalPrice : 0
    },
    reducers : {
        addToCart : (state, action)=>{
            const indexToUpdate = state.cart.findIndex(item => item.id === action.payload.id);
            if(indexToUpdate !== -1){

                state.cart[indexToUpdate].quantity = Number(state.cart[indexToUpdate].quantity) + Number(action.payload.quantity);
                state.totalPrice = state.totalPrice + Math.floor(state.totalPrice) * Number(action.payload.quantity)
                state.cartCount = state.cartCount + Number(action.payload.quantity)
                //setQuantity((prevQuantity)=>prevQuantity + 1)
            } else {
                state.cart.push({"id": action.payload.id,"price": action.payload.price,"quantity": action.payload.quantity, "title" : action.payload.title, "image" : action.payload.image, "rating" : action.payload.rating.rate });
                state.totalPrice = state.totalPrice + Math.floor(action.payload.price) * Number(action.payload.quantity)
                state.cartCount = state.cartCount + Number(action.payload.quantity)
                
            } 
            
            console.log("main",JSON.parse(JSON.stringify(state.cart)))
        },
        removeToCart : (state, action)=>{
            //alert(action.payload.id)
            const indexToUpdate = state.cart.findIndex(item => item.id === action.payload.id);
            if(indexToUpdate !== -1){
                
                state.cart[indexToUpdate].quantity -= 1;
                state.cartCount -= 1
                state.totalPrice = state.totalPrice - Number(Math.floor(state.cart[indexToUpdate].price))
                if(state.cart[indexToUpdate].quantity === 0){
                    state.cart.splice(indexToUpdate, 1)  
                }
                //state.totalPrice -= parseFloat(action.payload.price)
                //state.quantity -= 1 
            }
            console.log("main",JSON.parse(JSON.stringify(state.cart)))
            
        },
        increaseQuantity : (state, action)=>{
            const indexToUpdate = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart[indexToUpdate].quantity += 1;
            state.cartCount = state.cartCount + 1;
            state.totalPrice = state.totalPrice + Number(Math.floor(state.cart[indexToUpdate].price))
        }
    
    }
})
export const {addToCart, removeToCart, increaseQuantity} = cartSlice.actions
export default cartSlice.reducer;