import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import formatCurrency from '../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function LabelPrice({product, cart , setCart}) {
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
    <div className="flex justify-around gap-[20px]  w-[300px] h-[77px] items-center">
      <div>{formatCurrency(product.price)}</div> 
      <div
        onClick={(e) => {
          e.stopPropagation()
          return addToCart()
        }}
          className="p-[20px] bg-slate-200 rounded-2xl">
          <NavLink to='/keranjang'><ShoppingBagIcon className="h-[20px] w-[20px]" /></NavLink>
        </div>
      </div>
  )
}

export default LabelPrice