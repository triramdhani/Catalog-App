import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LabelPrice from './LabelPrice'


function Product({ collections, path, setCart }) {
  const Navigate = useNavigate()
  const productElement = collections.map(product => {
    return (
      <div key={product.id} onClick={()=>Navigate(`${path}/${product.id}`)}>
        <div className="relative w-[336px] h-[422px]">
        <img src={product.url} className=" w-[336px] h-[422px]" />
          <div className="absolute bottom-3 left-[15px] right-[15px] bg-slate-400 rounded-lg">
            <LabelPrice
              productPrice={product.price}
              productId={product.id}
              product={product}
              // cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    
    )
  })
  return (
    <div className=' ml-[24px] mb-[50px]'>
      {productElement}
      
    </div>
  )
}

export default Product