import React from 'react'
import Header from '../../components/ui/Header'
import {ShoppingBagIcon} from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom'

function DetailProduct({ productImage, price, size }) {
  const Location = useLocation()
  return (
    <div>
      <Header pageTitle='Motif Anime' />
      <main>
        <div className="">
          <img src="" alt="" />
          <div className="ukuran--sepre "></div>
        </div>
        <div>

        </div>
      </main>
      <footer>
        <div>Tambahkan Ke Keranjang</div>
        <div><ShoppingBagIcon className="h-[20px] w-[20px]"></ShoppingBagIcon></div>
      </footer>
      
    </div>
  )
}

export default DetailProduct