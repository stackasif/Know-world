import React from 'react'

function SearchData({search,setSearch ,filter,setFilter }) {

  const handleSearch=(e)=>{
    console.log(e.target.value);
    e.preventDefault();
    setSearch(e.target.value)
  }

  const handleFilter=(e)=>{
    e.preventDefault();
    setFilter(e.target.value)

  }

  return (
    <div className='flex justify-between px-4'>
        <div>
          <input className='border-none outline-none px-2 w-[60%] rounded-sm text-sm' type="search" placeholder='Search...' value={search}  onChange={handleSearch}/>
        </div>

        <div>
          <select name="" id="" value={filter} onChange={handleFilter}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="American">American</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    </div>
  )
}

export default SearchData