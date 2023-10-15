import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, removeToCart } from "../Slices/cartSlice";

const Cart = () => {
    const cart = useSelector((state)=> state.cart.cart)
    const totalPrice = useSelector((state)=> state.cart.totalPrice)
    const dispatch = useDispatch()
    //const rating = 1
    return(
        <>
          <div className="container cart_container">
            <div className="row">
              <div className="col-6 offset-3">
                <h1>Cart</h1>
                {cart.length === 0 && <div className="no-products">No Products</div>}
                <ul>
            
                  {cart.map((item, index)=>(
                    
                    <li key={index}>
                      <img className="prod-image" src={item.image} alt="Image" />
                        <div className="content">
                          <div className="title">{item.title}</div>
                          <strong></strong>
                          {/* <div className="rating_icons">
                          {Math.floor(item.rating)}
                          </div> */}
                          <div className="inp-grp-outer">
                          <div className="input-group">
                          <button type="button" className="btn" onClick={()=>dispatch(removeToCart({id:item.id}))}>-</button>
                          <div className="input-group-value">{item.quantity}</div>
                          <button type="button" className="btn" onClick={()=>dispatch(increaseQuantity({id: item.id, quantity : item.quantity }))}>+</button>
                          </div>
                          <div className="price">Rs. {item.price}</div>
                          </div>
                      </div>
                    </li>
                  
                  ))}
                  {cart.length !== 0 && <li className="total_price"><span>Total Amount</span><strong>Rs. {totalPrice}</strong></li>}
                    
                </ul>
                {cart.length !== 0 && <div className="text-center"><button type="btn" className="btn checkout_btn">Checkout</button></div>}
                
              </div>
            </div>
          </div>
         
        </>
    )
}

export default Cart;