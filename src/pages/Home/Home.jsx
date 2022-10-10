import React , { useState, createContext } from 'react'
import Header from './Header';
import Catagories from './Catagories'
import Products from './Products';
import productsData from '/src/data/productsData'
const data = productsData[0].data

function Home() {
  const [cart, setCart] = useState([])  
  // React.useEffect(() => {
  //   alert('berhasil ditambahkan ke keranjang');
  // },[cart])
  const showModalNav = () => console.log("nice");
  return (
    <>
      <Header
        pageTitle="Order From The Best Snack"
        button={showModalNav}
      />
      <Catagories
        
      />  
      <Products
        productsData={data}
        cart={cart}
        setCart={setCart}
      />
    </>
  )
}

export default Home