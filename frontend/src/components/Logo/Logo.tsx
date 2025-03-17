import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
function Logo() {
  return (
    <div className='ml-20 w-28 h-10 flex flex-wrap justify-center items-center gap-2'>
      <RxHamburgerMenu size={25} />
        <strong className='flex'>Strea<p className='text-red-700'>Mer</p></strong>
    </div>
  )
}

export default Logo
