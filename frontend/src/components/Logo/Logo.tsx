import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
function Logo() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=' w-28 h-10 flex flex-wrap justify-center items-center gap-2'>
      <RxHamburgerMenu size={25} className={isActive?"text-red-500":"text-black"} onClick={()=>setIsActive(!isActive)} />
        <strong className='flex'>Strea<p className='text-red-700'>Mer</p></strong>
    </div>
  )
}

export default Logo
