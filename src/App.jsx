import { useState , useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import DetailProduct from "./pages/DetailProduct/DetailProduct"
import Home from "./pages/Home/Home"
import ProductCollection from "./pages/ProductCollection/ProductCollection"

const App = () => {
  const [cart, setCart]= useState([])
  useEffect(() => {
    console.log(cart);;
  },[cart])
  return(
    <>
      <Routes>
        <Route path="/" element={<Home setCart={setCart } />}/>
        <Route path="/:id" element={<ProductCollection setCart={setCart }/>} />
        <Route path="/:id/:id" element={<DetailProduct setCart={setCart }/>} />
        <Route path="/keranjang" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App