import React from 'react'
import { NavLink } from 'react-router-dom'

import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import Product from '../Home/ProductHome'

function AddToCart({cart, setCart, thisProduct}) {
  const addToCart = () => {
    let isAdded 
    for (let i = 0; i < cart.length ; i++){
      cart[i].name === thisProduct.name ? isAdded= true : 'nothing'
    }
    isAdded ?  alert('sudah ada'):
      setCart(prevState => {
      let newCart = {nama : thisProduct.nama, name: thisProduct.name, price: thisProduct.price, qty: 1 , url : thisProduct.url}
      alert('harusnya tamplikan modal dan menuju keranjang') 
      return [...prevState, newCart]   
      
    }) 
  }
  return (
    <div className='flex p-2 ml-8 mr-8 justify-between items-center rounded-2xl bg-slate-200'>
        <div>Tambahkan Ke Keranjang</div>
        <NavLink to='/keranjang'>
        <div 
          onClick={() => {
           return thisProduct.isAvailable === false ? alert("stock habis") :
              addToCart()
          }}
          className="bg-green-300 w-[fit-content] pr-5 pl-5 pt-3 pb-3 rounded-xl">
          <ShoppingBagIcon className="h-[20px] w-[20px]"></ShoppingBagIcon></div>
        </NavLink>
    </div>
  )
}

export default AddToCart