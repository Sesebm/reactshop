import React from 'react'

const CartItem = ({products}) => {
    console.log(products)
  return (
    <div>
    <div>
    {products.title}
    </div>
    <div>{products.productsInCart.quantity}</div>
    <div>{products.productsInCart.quantity * products.price}</div>
    </div>

  )
}

export default CartItem