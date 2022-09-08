import {  IconButton } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import { useSelector } from 'react-redux';


const CartItem = ({products, setPro}) => {


    const token = useSelector(state => state.token)
  
    const getAunt = () => ({
      
        headers: {
          Authorization: `Bearer ${token}`
        }
        
      })

    const handlerDelete = () =>{ 

        axios.delete('https://ecommerce-api-react.herokuapp.com/api/v1/cart/'+products.id, getAunt())
        .then(() => {const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getAunt())
          .then(res => setPro(res.data.data.cart.products))
          .catch(err => setCartProducts())


            
        })
    }

  return (
    <div className='cartcardbox'>
    <div className='titulocart'>
    {products.title}
    </div>
    <div className='cartcarddivition'>
    <div>{products.productsInCart.quantity}  Qty </div>
   <div>{products.price}  UP</div>
   </div>
    <div className='cartcentral'>Subtotal:{products.productsInCart.quantity * products.price}$</div>
    <IconButton margin={`0px`} padding={`0px`} right={`5px`} bottom={`5px`} position={`absolute`} fontSize='20px' icon={<AiOutlineDelete />} colorScheme='red' variant='solid' onClick={handlerDelete} borderRadius='20px'>

  </IconButton>
    </div>

  )
}

export default CartItem