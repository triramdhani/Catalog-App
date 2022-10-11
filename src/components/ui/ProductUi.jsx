import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LabelPrice from './LabelPrice'
import Status from './Status'


function Product({ collections, path, cart ,setCart }) {
  const Navigate = useNavigate()
  const productElement = collections.map(product => {
    return (
      <div key={product.id} onClick={()=>Navigate(`${path}/${product.id}`, {state: product})}>
        <div className="relative w-[171px] h-[215px]">
          {product.isAvailable === false && <Status/>}
          <img src={product.url} className=" w-[171px] h-[215px]" />
          <div className="absolute bottom-3 left-[15px] right-[15px] bg-slate-400 rounded-lg">
            <LabelPrice
              productPrice={product.price}
              productId={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    
    )
  })
  return (
    <div className='grid gap-x-[0px] gap-y-[30px] grid-cols-2 ml-[24px] mt-3 mb-[50px]'>
      {productElement}      
    </div>
  )
}

export default Product