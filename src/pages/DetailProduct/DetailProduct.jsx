import React from 'react'
import Header from '../../components/ui/Header'
import { useLocation } from 'react-router-dom'
import AddToCart from './AddToCart'
import Deskripsi from './Deskripsi'
import formatCurrency from '../../utils/formatCurrency'

function DetailProduct({cart , setCart}) {
  const Location = useLocation()
  const thisProduct = Location.state
  
  return (
    <div>
      <Header pageTitle={`${thisProduct.nama} ${thisProduct.name}`} />
      <div className='ml-8'>Sisa : {thisProduct.stock}</div>

      <main>
        <div className="flex justify-center items-center ">
          <img src={thisProduct.url} alt="" className='w-[251px] h-[375px]'/>
        </div>
        <div className="flex justify-center m-3">
          <h1 className=' bg-green-500 w-[fit-content] p-[8px] rounded-xl'>{formatCurrency(thisProduct.price)}</h1>
        </div>
      </main>
      <footer>
        <AddToCart cart={cart} setCart={setCart} thisProduct={thisProduct} />
        <Deskripsi thisProduct={thisProduct } />
      </footer>
      
    </div>
  )
}

export default DetailProduct