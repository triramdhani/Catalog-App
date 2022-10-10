import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/ui/Header'
import ProductUi from '../../components/ui/ProductUi'
function ProductCollection({setCart}) {
  const location = useLocation()
  const collection = location.state.collections

  return (
    <>
      <Header
        pageTitle='Koleksi Sepre'
      />
      <main className='grid '>
        <div className="bg-slate-100 rounded-lg w-[130px] p-1 text-[14px]"> {collection.length} Items </div>
        <ProductUi
          key={collection.id}
          collections={collection}
          path={location.pathname}
          setCart={setCart}
        />
      </main>
    </>
  )
}

export default ProductCollection