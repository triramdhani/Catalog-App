import React from 'react'

function Deskripsi({thisProduct}) {
  return (
    <div className='ml-8 mt-4'>
      <h3>Deskripsi</h3>
        <div className="ukuran--sepre">Ukuran : {thisProduct.ukuran}</div>
        
    </div>
  )
}

export default Deskripsi