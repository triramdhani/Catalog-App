import React from 'react'
import Product from './ProductHome'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function Products({ productsData, cart, setCart }) {
  const ProductsElement = productsData.map((product) => {
    return (
      <div
        key={product.collectionId}
        className="mt-[16px]">
        <div className='flex justify-between ml-[44px] mr-[44px] mb-[22px]'>
          <div>Koleksi {product.collectionName}</div>
          <div className="text-end" > <NavLink to={`/${product.collectionId}`} state={product}> Lihat semua</NavLink></div>
        </div>
        <Product
          id={`${product.collectionsId}`}
          collectionId={product.collectionId}
          collections={product.collections}
          cart={cart}
          setCart={setCart}
        />
      </div>      
    )
  })
  
  // fetch product collection dan tampilkan 5 product tiap koleksi
  return (
    <main>
    {ProductsElement}
    </main>
      // {ProductsElement}
  )
}

export default Products