import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import DetailProduct from "./pages/DetailProduct/DetailProduct"
import Home from "./pages/Home/Home"
import ProductCollection from "./pages/ProductCollection/ProductCollection"

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:ID" element={<ProductCollection />} />
        <Route path="/:id/:id" element={<DetailProduct />} />
        <Route path="/keranjang" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App