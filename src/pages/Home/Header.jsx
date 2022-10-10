import React from 'react'
import {Bars3Icon} from '@heroicons/react/20/solid'

function Header({pageTitle, button, icon}) {
  
  return (
    <header className="flex justify-between mt-[34px] mb-[16px] pl-[34px] pr-[22px] ">
      <h1 className="text-[30px]">{pageTitle}</h1>
      <div className="grid place-items-center justify-center  w-[69] h-[95] p-1 border rounded-2xl">
        <Bars3Icon className="h-[24px] w-[32px] "/>
      </div>
    </header>
  )
}

export default Header