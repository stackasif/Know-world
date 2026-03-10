import React from 'react'
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";



function Hero() {
  return (
    
    <main className='bg-neutral-900 text-white py-20'>
      <div className='flex flex-col md:flex-row items-center justify-between'>

          <div className='w-full md:w-1/2 flex flex-col p-5 gap-6 order-2 md:order-1'>
            <h2 className='text-4xl font-bold text-left max-w-[500px]'>
              Explore the world, one  country at a time.
            </h2>

            <p className='text-left max-w-[500px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              corporis tempora ipsa harum.
            </p>

            <button className=' border px-4 py-2 rounded-md w-fit '>
              <NavLink to='/country' className="flex items-center gap-2">Start exploring <FaArrowRightLong /> </NavLink>
            </button>
          </div>

          <div className='w-full md:w-1/2 flex justify-center order-1 md:order-2'>
            <img className='w-[300px] md:w-[450px] lg:w-[550px]' src="map.avif" alt="map" />
          </div>

      </div>
   </main>
  )
}

export default Hero;