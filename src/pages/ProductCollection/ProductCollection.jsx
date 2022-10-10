import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/ui/Header'
import Product from '../../components/ui/ProductUi'
function ProductCollection() {
  const location = useLocation()
  const collection = location.state.collections

  return (
    <>
      <Header
        pageTitle='Koleksi Sepre'
      />
      <main className='grid '>
        <div className="bg-slate-100 rounded-lg w-[130px] p-1 text-[14px]"> {collection.length} Items </div>
        <Product
          key={collection.id}
          collections={collection}
          path={location.pathname}
        />
      </main>
    </>
  )
}

export default ProductCollection