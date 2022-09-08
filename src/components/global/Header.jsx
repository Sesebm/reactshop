import React, { useEffect, useState } from 'react'
import './Header.css'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, 
  useDisclosure,
  Input
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CartItem from '../element/CartItem';

const header = () => {
  const [cartProducts, setCartProducts] = useState()
  const token = useSelector(state => state.token)
  console.log(cartProducts)
  const getAunt = () => ({
    
      headers: {
        Authorization: `Bearer ${token}`
      }
      
    })
 const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
   
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      axios.get(URL, getAunt())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    
  }, [isOpen, onOpen, onClose]);
  
  handleCheckout = () =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
      })
      .catch(err => console.log(err))
  }
 
 

  return (
   
<div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
  <Link className='Alink nav-title' to="/">
    
      E-commerce
    </Link>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  
  <Link className='Alink' to="/purchases">My purchases</Link>
  <Link className='Alink' to="/Login">Login</Link>
  
    
    </div>
    
    <Button  className='nav-linkazo' colorScheme='blue' onClick={onOpen}>
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            
          <div className="cart-cards">
        {cartProducts?.map((item, index) => (
          <CartItem key={item.id} products={item}/>
        ))}
      </div>

          </DrawerBody>

          <DrawerFooter>
          <div className="footerdrawer">
          <p>Total:</p>
          <br />
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={handleCheckout}>Cheekout</Button></div>
            <br />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  
</div>
  )
}

export default header