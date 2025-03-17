import React from 'react'

export default function ItnroPage() {
  return (
    <div className='h-full w-4/5 overflow-hidden flex flex-wrap items-center justify-center relative'>
      <img src="public\itroPage\tianshu-liu-khQY5Eu-aa0-unsplash.jpg" alt=""  className='object-cover w-full h-full absolute -z-10' />
      <div className='w-full h-full flex flex-col  justify-center items-center absolute  '>
        <strong className='text-white text-6xl font-extrabold'>
            Discover.Share.Inspire
        </strong> 
        <b className='text-white font-semibold'>"Unleash your creativity, connect with a global audience, and explore millions of videos—all in one place."</b>
      </div>
    </div>
  )
}
