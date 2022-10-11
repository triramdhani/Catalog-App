import React from 'react'
import Header from '../../components/ui/Header'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function DetailProduct({cart , setCart}) {
  const Location = useLocation()
  const thisProduct = Location.state
  const Navigate = useNavigate
  const addToCart = () => {
    let isAdded 
    for (let i = 0; i < cart.length ; i++){
      cart[i].name === thisProduct.name ? isAdded= true : 'nothing'
    }
    isAdded ?  alert('sudah ada'):
      setCart(prevState => {
      let newCart = {nama : thisProduct.nama, name: thisProduct.name, price: thisProduct.price, qty: 1 , url : thisProduct.url}
      alert('harusnya tamplikan modal dan menuju keranjang') 
      return [...prevState, newCart]   
      
    }) 
  }
  return (
    <div>
      <Header pageTitle={`${thisProduct.nama} ${thisProduct.name}`} />
      <main>
        <div className="">
          <img src={thisProduct.url} alt="" />
        </div>
        <div>

        </div>
      </main>
      <footer>
        <div className="ukuran--sepre">{thisProduct.ukuran }</div>
        <div>Tambahkan Ke Keranjang</div>
        <NavLink to='/keranjang'>
        <div onClick={()=> addToCart()}><ShoppingBagIcon className="h-[20px] w-[20px]"></ShoppingBagIcon></div>
        </NavLink>
      </footer>
      
    </div>
  )
}

export default DetailProduct