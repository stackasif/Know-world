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
    <>
    <h1 className='text-white'>Country page</h1>
    </>
    
  )
}

export default Country;