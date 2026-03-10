import React, { useEffect, useTransition } from 'react'
import { getMethod } from '../api/ApiData'
import Loader from '../components/ui/Loader'

function Country() {

   const [isPending, startTransition]= useTransition()
    useEffect(()=>{
      startTransition(async()=>{
           let response = await getMethod()
        console.log(response);
        
      })
    },[])

    if (isPending) {
      return (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  );
    }


  return (
    <div className='min-h-[400px]'>
    <h1 className='text-white text-center'> Lund le le mera Madhrchod.🍌🍌</h1>
    <p className='text-white text-center'>AB hass le bhosdk😏</p>
    </div>
    
  )
}

export default Country;