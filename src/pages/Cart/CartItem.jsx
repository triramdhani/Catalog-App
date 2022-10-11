import React from 'react'
import {TrashIcon} from '@heroicons/react/20/solid'
import formatCurrency from '../../utils/formatCurrency'

function CartItem({ cart , setCart}) {
  const deleteCart = (params) => {
    let newCart = []
    let deletedCart = []
    cart.map(item => {
      return item.name === params ? deletedCart.push(item) : newCart.push(item) 
    })
    setCart(newCart)
  }

  const cartElement = cart.map((item, index) => {    
    return (
      <div key={index} className="flex ml-[38px] mr-[38px] mb-[39px] justify-between">
        <div className='flex gap-5 items-center'>
          <img src={item.url} className="w-[77px] h-[77px]" />
          <div className="">
            <span>{item.nama}</span> <br/>
            <span>{item.name}</span>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <div>{formatCurrency(item.price)}  </div>
          <div onClick={()=>deleteCart(item.name)}><TrashIcon className='w-[20px]'/></div> 
        </div>
      </div>
    )
  })

  return (
    <>
    {cartElement}  
    </>
  )
}

export default CartItem