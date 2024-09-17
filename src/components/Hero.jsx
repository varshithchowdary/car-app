import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
         <div className='flex flex-col  items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
      <h2 className='text-lg'>Find Cars for sale for rent near you</h2>
      <h2 className='text-[65px] font-bold'>Find your Dream car</h2>
      <Search/>
      <img src="/car.png" className='animated-car mt-10' />
        </div>

    </div>
   
  )
}

export default Hero
