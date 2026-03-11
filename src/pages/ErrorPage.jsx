import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
   const error= useRouteError();
   console.log(error);
   
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
        <h1 className='text-xl font-bold'>
            Ooops..... Page not found
           
        </h1>
         <br />
        {
        error && <p>{error.data}</p>
        }
        
        
        
    </div>
  )
}

export default ErrorPage;