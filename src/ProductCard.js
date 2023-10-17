import React, { useState } from "react"
import {  useDispatch } from "react-redux"
import { addToCart } from "./Slices/cartSlice"

const ProductCard =({id,image,title,price, category, rating})=>{
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const [disabled, setDisabled] = useState(true)
   
    const decInputValue = () =>{
        setQuantity(quantity - 1) 
        console.log(quantity - 1)
        if(quantity -1 < 2  ){
            setDisabled(true)
           }else{
               setDisabled(false)
           }
      }
     
    const setInputValue = (event) =>{
         setQuantity(event.target.value) 
         console.log(quantity)
     }
     const incInputValue = () =>{
        console.log(quantity + 1)
       setQuantity(quantity + 1)
        if(quantity +1 < 2  ){
         setDisabled(true)
        }else{
            setDisabled(false)
        }
              
        
      }
    const ratingCount = rating.rate
    let ratingIcon = ""
    for (let i = 0; i < ratingCount; i++){
        ratingIcon += "★"
    }

    return(
        <>
            <div className='col-3' key={id}>
           <div className='card'>
           <img
            className="card-img-top"
              src={image}
              alt="Product"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text rating">{ratingIcon}</p>  
                <h6>Rs {price}</h6>
                <div className="btn_group">
                <button type="button" className="btn btn-primary" disabled={disabled} onClick={decInputValue}>-</button>
                <input type="number" readOnly value={quantity} onChange={setInputValue} className="quantity-value" />  
                <button type="button" className="btn btn-primary" onClick={incInputValue}>+</button>
                </div>
                
                <button type="button" className="btn add-to-cart-btn" onClick={()=>dispatch(addToCart({id: id, price : price, title : title, category : category, image : image, rating : rating, quantity : quantity }))}>Add to Cart</button>
            </div>
           </div>
          </div>
        </>
    )
}
export default ProductCard