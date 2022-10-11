import React from 'react'
import CartItem from './CartItem';
import CartNotFound from './CartNotFound';


function CartList({cart, setCart}) {
  return (
    <div>
      {cart.length > 0 ? <CartItem cart={cart} setCart={setCart } /> : <CartNotFound/>}
    </div>
    
  )
}

export default CartList