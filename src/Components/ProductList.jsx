import React, {useEffect} from 'react';
import ProductCard from '../ProductCard'
import { useSelector, useDispatch } from "react-redux"
import { fetchContent } from '../Slices/dataSlice';


const ProductList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContent())
    }, [dispatch])
  
    const products = useSelector((state) => state.content.products)
    const isLoading = useSelector((state) => state.content.isLoading)
    const error = useSelector((state) => state.content.error)
    
  
  
    if (isLoading) {
      return (
        <>
          
        </>
      )
    }
  
    if (error) {
      return (
        <>
          <div className="loading">{error}</div>
        </>
      )
    }
  
    const categoryJewelery = products.filter(value => value.category === "jewelery"); // [ 2
     
    return (
    <div className='container prod-list-cont'>
       
     
         
        <div className='row'>
          {products.map((content) => (
            <ProductCard key={content.id} {...content} />
          ))}
        </div>
        <div className='row'>
          <h2>Category - Jewelery</h2>
          {categoryJewelery.map((content) => (
            <ProductCard key={content.id} {...content} />
          ))}
          
        </div>
        
      
    </div>
  )
}

export default ProductList;