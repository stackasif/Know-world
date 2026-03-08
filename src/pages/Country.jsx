import React from 'react'
import data from '../api/data.json'
function Country() {
  return (
    <div className='bg-neutral-900 text-white py-10'>
          <div>
            <h3 className='text-center text-4xl font-bold mb-8'>Here are the some intresting facts <br /> about our world.</h3>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center">
    
            {data.map((item) => {
              const { id, name, capital, population, interesting_facts } = item;
    
              return (
                <div key={id} className="w-full max-w-[350px] bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-md 
                              hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
                  <h3 className="text-2xl font-bold mb-4">{name}</h3>
    
                  <p><span className="text-neutral-400">Capital :</span> {capital}</p>
                  <p><span className="text-neutral-400">Population :</span> {population}</p>
                  <p><span className="text-neutral-400">Interesting Facts :</span> {interesting_facts}</p>
    
                </div>
              );
            })}
        </div>
        </div>
  )
}

export default Country