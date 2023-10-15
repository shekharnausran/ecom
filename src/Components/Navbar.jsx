import React from "react";
import { useSelector } from "react-redux";
import { useNavigate  } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const cartCount = useSelector((state)=> state.cart.cartCount)
    return(
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-brand"  onClick={() => navigate('/')}><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                      
                    </ul>
                    <button className="cart_btn btn" onClick={() => navigate('/cart')}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <strong>{cartCount}</strong>
                        <span>Cart</span>
                    </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;