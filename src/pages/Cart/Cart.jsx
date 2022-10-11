import React from 'react'
import CartList from './CartList'
import CartHeader from './CartHeader'
import Chekout from './Chekout'
import CartBill from './CartBill'
function Cart({cart, setCart}) {
  return (
    <>
      <CartHeader cart={cart } />
      <CartList
        cart={cart}
        setCart={setCart}
      />
      <CartBill cart={cart} />
      {/* <Chekout /> */}
    </>
  )
}

export default Cart