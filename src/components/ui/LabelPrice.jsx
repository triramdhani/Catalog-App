import React from 'react'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import formatCurrency from '../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'
import { NavLink , Link} from 'react-router-dom'


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
    <div className="flex gap-6 p-1 w-[150px] h-[40px] items-center">
      <div className='text-[15px] '>{formatCurrency(product.price)}</div> 
      <div
        onClick={(e) => {
          e.stopPropagation()
          return product.isAvailable === false ? alert("stock kosong") :
           addToCart()
        }}
          className=" p-[5px] bg-slate-200 rounded-lg">
          <Link to='/keranjang'><ShoppingBagIcon className="h-[18px] w-[18px]" /></Link>
        </div>
      </div>
  )
}

export default LabelPrice