import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import formatCurrency from '../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'


function LabelPrice({product,  cart , setCart}) {
  const addToCart = () => {
    return  setCart(prevState => {
      let newCart = {name: product.id, price: product.price, qty: 1  }
      // alert('ok')
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
          <ShoppingBagIcon className="h-[20px] w-[20px]" />
        </div>
      </div>
  )
}

export default LabelPrice