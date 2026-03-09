import React from 'react'
import footerData from "../../api/footerData.json"
import { FaLaptopHouse } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { MdMail } from "react-icons/md";



function Footer() {
  const footerIcon={
    FaLaptopHouse:<FaLaptopHouse />,
    MdAddIcCall:<MdAddIcCall />,
    MdMail:<MdMail />,
  }

  return (
   <div className='w-full grid grid-cols-1 md:grid-cols-3 bg-zinc-800 text-white gap-6 place-items-center md:place-items-start py-8 md:p-6' >
     {footerData.map((data,ind)=>{
      let {icon,title,details,id}= data
      return (
          <div className='flex flex-wrap flex-col md:flex-row justify-center md:justify-start items-center text-center md:text-start gap-3'>
              <div className=''>
                  <span className='text-2xl font-bold'>{footerIcon[icon]}</span>
              </div>
              <div>
                  <p className='text-[14px] font-semibold'>
                      {title}
                  </p>
                  <p className='text-[12px] font-semibold text-neutral-400'>
                      {details}
                  </p>
              </div>
          </div>
      )
      })}
   </div>
  )
}

export default Footer


