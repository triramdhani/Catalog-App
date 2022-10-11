import React , { useState, createContext } from 'react'
import Header from './Header';
import Catagories from './Catagories'
import ProductHome from './ProductHome';
import productsData from '/src/data/productsData'
import { NavLink } from 'react-router-dom';
const data = productsData[0].data

function Home({setCart, cart}) {
    const ProductsElement = data.map((product) => {
    return (
      <div
        key={product.collectionId}
        className="mt-[16px]">
        <div className='flex justify-between ml-[44px] mr-[44px] mb-[22px]'>
          <div>Koleksi {product.collectionName}</div>
          <div className="text-end" > <NavLink to={`/${product.collectionId}`} state={product}> Lihat semua</NavLink></div>
        </div>
        <ProductHome
          id={`${product.collectionsId}`}
          collectionId={product.collectionId}
          collections={product.collections}
          cart={cart}
          setCart={setCart}
        />
      </div>      
    )
  })

  return (
    <>
      <Header
        pageTitle="Order From The Best Snack"
      />
      <Catagories
        
      />  
      {ProductsElement}
    </>
  )
}

export default Home