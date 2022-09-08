import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomeAccordeon from './element/HomeAccordeon'
import HomeSearchBar from './element/HomeSearchBar'
import { getProductsThunk } from '../store/products.slice';
import ProductsCard from './element/ProductsCard';


const Home = () => {
  const dispatch = useDispatch();
  const productsAll = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch])
  

  return (
   <div className='Home'>
    <HomeSearchBar/>
    <div className='Home-divition'>
  <div className='Home-left'>
    
     <HomeAccordeon/>
     </div>

     <div className="cards-container">
        {productsAll?.map((products, index) => (
          <ProductsCard key={products.id} products={productsAll[index]}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home