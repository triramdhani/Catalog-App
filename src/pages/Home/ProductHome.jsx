import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LabelPrice from './ProductLabel'
import Status from '../../components/ui/Status'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


function Product({ collectionId, collections, cart, setCart }) {

  const Navigate = useNavigate()
  const productElement = collections.map(product => {
    return (      
      <SwiperSlide
        key={product.id}
        onClick={() =>Navigate(`/${collectionId}/${product.id}`, {state: product})}
        // className="flex-none "
        className="w-[300px] h-[400px]"
        >
        <div className="relative w-[290px] h-[400px]">
          <img src={product.url} className=" w-[300px] h-[400px]" />
          {product.isAvailable === false && <Status />}
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
      </SwiperSlide>
    )
  })
  return (
    <Swiper
      direction='horizontal'
      spaceBetween={-40}
      slidesPerView={1}
      className="ml-[24px] mb-[50px]"
    >
      {productElement}
    </Swiper>
  )
}

export default Product