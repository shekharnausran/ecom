import React from 'react';
 
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
 
function App() {
  
  return (
    <>
    <Navbar />
    <Routes> 
      <Route exact path="/" element={<ProductList/>}/> 
      <Route exact path="/cart" element={<Cart/>}/> 
    </Routes> 
    </>
  )
}

export default App