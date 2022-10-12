import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from '../../components/ui/Header'
import ProductUi from '../../components/ui/ProductUi'
function ProductCollection({setCart ,cart}) {
  const location = useLocation()
  console.log(location.state.collections);
  const collection = location.state.collections

  return (
    <>
      <Header
        pageTitle='Koleksi Sepre'
      />
      <main className='grid '>
        <div className="text-left items-center flex pl-3 bg-slate-100 rounded-lg h-[40px] w-[100px] p-1 ml-[24px] text-[14px]"> <span className='font-bold mr-1'>{collection.length } </span> Items </div>
        <ProductUi
          key={collection.id}
          collections={collection}
          path={location.pathname}
          cart={cart}
          setCart={setCart}
        />
      </main>
    </>
  )
}

export default ProductCollection