import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import formatCurrency from '../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function LabelPrice({product, cart , setCart, styleLabel}) {
  let cartLength = cart.length
  const addToCart = () => {
    let isAdded 
    for (let i = 0; i < cartLength ; i++){
      cart[i].name === product.name ? isAdded= true : 'nothing'
    }
    isAdded ?  alert('sudah ada'):
      setCart(prevState => {
      let newCart = {nama : product.nama, name: product.name, price: product.price, qty: 1 , url : product.url}
      alert('harusnya tamplikan modal dan menuju keranjang') 
      return [...prevState, newCart]   
      
    }) 
  }

  return (
    <div className="flex justify-around gap-[20px]  w-[280px] h-[66px] items-center">
      <div>{formatCurrency(product.price)}</div> 
      <div
        onClick={(e) => {
          e.stopPropagation()
          return product.isAvailable === false ? alert("stock habis") : addToCart()
        }}
          className="p-[15px] bg-slate-200 rounded-2xl">
          <NavLink to='/keranjang'><ShoppingBagIcon className="h-[25px] w-[25px]" /></NavLink>
        </div>
      </div>
  )
}

export default LabelPrice