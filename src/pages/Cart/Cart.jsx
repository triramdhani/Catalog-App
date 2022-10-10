import React from 'react'
import CartList from './CartList'
import CartHeader from './CartHeader'
import Chekout from './Chekout'
function Cart({cart, setCart}) {
  return (
    <>
      <CartHeader cart={cart } />
      <CartList cart={cart} />
      <Chekout />
    </>
  )
}

export default Cart