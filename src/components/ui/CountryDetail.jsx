import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetail() {
   const params= useParams()
   console.log(params);
   
  return (
    <div><h1 className='text-2xl text-center text-white'>Country details card abhi nahi bana hai kal banega🤗🤗</h1></div>
  )
}

export default CountryDetail