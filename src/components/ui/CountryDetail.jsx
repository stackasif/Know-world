import React, { useEffect, useTransition } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getIndividualMethod } from '../../api/ApiData';
import Loader from './Loader';

function CountryDetail() {
  
   const params= useParams()
  //  console.log(params);


    const [isPending, startTransition]= useTransition()
      const [country,setCountry]=useState()
      
      console.log(country);
      // console.log(country[0].data);
      
      
       useEffect(()=>{
         startTransition(async()=>{
              let response = await getIndividualMethod(params.name)
           console.log(response);
           // console.log(response.data);
           //  const data = Array.isArray(response.data) ? response.data : []
       setCountry(response.data[0])})
       },[])
   
       if (isPending) {
         return (
       <div className="flex justify-center items-center h-screen">
         <Loader />
       </div>
     );
       }



   
  return (
    <div>
      <div className='grid grid-cols-2'>
          <div className='flex justify-center items-center my-28'>
            <div className=' w-[500px] h-auto '>
              <img src={country?.flags?.svg}/>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-2xl font-semibold text-white'>{country?.name?.common}</h1>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Native name :</span>{Object.values(country?.name?.nativeName || {}).slice(0,5).map((n )=> n.common).join(", ")}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Official name : </span>{country?.name?.official}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Capital: </span>{country?.capital}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Region : </span>{country?.region}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Sub Region : </span>{country?.subregion}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Population : </span>{country?.population}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Top domain : </span>{country?.tld}</p>
              <p className='text-sm  text-white'><span className='text-sm font-semibold text-gray-300'>Top domain : </span>{Object.values(country.currencies)
    .map(c => c.name)
    .join(", ")}</p>
             
            
            </div>
          </div>
      </div>
    </div>
  )
}

export default CountryDetail;