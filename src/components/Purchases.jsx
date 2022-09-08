import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Purchases = () => {
  const [purchases, setPurchases] = useState()
  const token = useSelector(state => state.token)
  
  const getAunt = () => ({
    
      headers: {
        Authorization: `Bearer ${token}`
      }
      
    })

    useEffect(() => {
      
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.get(URL, getAunt())
          .then(res => setPurchases(res.data.data.purchases))
          .catch(err => console.log(err))
     
  
    }, [])
   
    console.log(purchases)

  return (
   
    
    <div>
    
    {purchases?.map((purch, index) => (

      <div> 
      <p>{purch.createdAt}</p>  
      <p>  {purch.cart.products.map((items) => (
      <div> {items.title} </div> ))}
      </p><br></br>
      </div>
          
    ))}
        
    </div>
   
  )
}

export default Purchases