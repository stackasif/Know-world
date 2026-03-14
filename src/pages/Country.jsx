import React, { useEffect, useState, useTransition } from 'react'
import { getMethod } from '../api/ApiData'
import Loader from '../components/ui/Loader'
import { NavLink } from 'react-router-dom'
import SearchData from '../components/ui/SearchData'

function Country() {

   const [isPending, startTransition]= useTransition()
   const [countryData,setCountryData]=useState([])
 
   const [search,setSearch]=useState();
   const [filter,setFilter]=useState("all");

   console.log(search,filter);
   

   
   
    useEffect(()=>{
      startTransition(async()=>{
           let response = await getMethod()

        // console.log(response);
        // console.log(response.data);
        //  const data = Array.isArray(response.data) ? response.data : []
        
    setCountryData(response.data)
      })
    },[])

    if (isPending) {
      return (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  );
    }


    // console.log(countryData.name.common);
    
   const searchData = (data) => {
  if (search) {
    return data.name.common.toLowerCase().includes(search.toLowerCase())
  }
  return true
}

const filterData = (data) => {
  if (filter === "all") {
    return true
  } else {
    return data.region === filter
  }
}



    let newCountry= countryData.filter((data)=> searchData(data)  &&  filterData(data) )

  return (
    <div>
      <SearchData search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
          
                  {newCountry.slice(0,20).map((item,ind) => {
                    
                    
                    const { id, name,region, capital, population, interesting_facts,flags } = item;
              
                    return (
                      <div key={ind} className="w-full max-w-[350px] bg-neutral-800 text-white border border-neutral-700 rounded-xl p-3 shadow-md 
                                    hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                        <div className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] bg-neutral-800 flex items-center justify-center overflow-hidden rounded-md">
                          <img src={flags.svg} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 ">{name.common.length>10 ?name.common.slice(0,10) + "...":name.common }</h3>
          
                        <p><span className="text-neutral-400">Population :</span> {population}</p>
                        <p><span className="text-neutral-400">Region :</span>{region}</p>
                        <p><span className="text-neutral-400">Capital :</span> {capital}</p>

                      <NavLink to={`/country/${name.common}`} >
                          <button type="button" className="my-3 text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-gray-200 w-full">Know more</button>

                      </NavLink>
                      </div>
                    );
                  })}
              </div>
    </div>
    
  )
}

export default Country;

