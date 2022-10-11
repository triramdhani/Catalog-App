import { useState , useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import DetailProduct from "./pages/DetailProduct/DetailProduct"
import Home from "./pages/Home/Home"
import ProductCollection from "./pages/ProductCollection/ProductCollection"

const App = () => {
  const [cart, setCart]= useState([])

  return(
    <>
      <Routes>
        <Route path="/" element={<Home
          setCart={setCart}
          cart={cart}
        />} />
        <Route path="/:collectionId" element={<ProductCollection setCart={setCart} cart={cart } />} />
        <Route path="/:collectionId/:id" element={<DetailProduct setCart={setCart} cart={cart } />} />
        <Route path="/keranjang" element={<Cart
          cart={cart}
          setCart={setCart}
        />} />
      </Routes>
    </>
  )
}

export default App