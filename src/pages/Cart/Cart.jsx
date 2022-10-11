import React from 'react'
import CartList from './CartList'
import CartHeader from './CartHeader'
import Chekout from './Chekout'
import CartBill from './CartBill'
import { NavLink } from 'react-router-dom'

function Cart({cart, setCart}) {
  return (
    <>
      <CartHeader cart={cart } />
      <CartList
        cart={cart}
        setCart={setCart}
      />
      {cart.length > 0 && <CartBill cart={cart}/>}
      <NavLink to='/'><div className='text-center text-xs text-blue-800 mt-9'>Kembali ke Halaman Utama</div></NavLink>
      {/* <Chekout /> */}
    </>
  )
}

export default Cart