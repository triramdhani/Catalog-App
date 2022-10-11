import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LabelPrice from '../../components/ui/LabelPrice'


function Product({ collectionId, collections, cart, setCart }) {
  const Navigate = useNavigate()
  const productElement = collections.map(product => {
    return (
      
      <div
        key={product.id}
        onClick={() =>Navigate(`/${collectionId}/${product.id}`, {state: product})}
        className="flex-none"
        >
        <div className="relative w-[336px] h-[422px]">
        <img src={product.url} className=" w-[336px] h-[422px]" />
          <div className="absolute bottom-3 left-[15px] right-[15px] bg-slate-400 rounded-lg">
            <LabelPrice
              product={product}
              productPrice={product.price}
              productId={product.id}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    
    )
  })
  return (
    <div className='flex overflow-hidden gap-7 ml-[24px] mb-[50px]'>
     {productElement}
    </div>
  )
}

export default Product