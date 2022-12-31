import React from 'react'

import PC from './desktop-regular-24.png';

import { SiBigcartel } from "@react-icons/all-files/si/SiBigcartel";
import { MdOutlineDesktopMac } from "react-icons/md";


import Image from 'next/image'

const Navbar = () => {
  return (
   <>
   <div className="bg-gradient-to-r from-[#130b27] to-[#310247] z-23 sticky w-full h-[148px] flex as items-center justify-around align-center m-0  text-white font-bold">

    <SiBigcartel className='w-[38px] h-auto text-[#ffffffd8] backdrop-blur-[20px]' /> 
      <ul className="lg:flex hidden m-0 ">
        <li className="item ">
            <a href="" className="">
                Home
            </a>
        </li>
        <li className="item">
            <a href="" className="">
                Projects
            </a>
        </li>
        <li className="item">
            <a href="" className="">
                Servics
            </a>
        </li>
      </ul>
      <button className="btn flex m-0 justify-center items-center gap-3 px-[24px] py-[8px] bg-[#ffffff1e] backdrop-blur-[20px] rounded-[16px] border-2" ><MdOutlineDesktopMac /> Download Now </button>
   </div>

   </>
  )
}

export default Navbar