import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#EEFFF9] p-4 flex flex-col gap-3">
      {/* LOGO */}
      <div className='flex font-extrabold text-3xl md:text-4xl items-center justify-center'>
        <h1 className='text-[#63C625]'>MEDI</h1>
        <h1 className='text-black'>TRACK</h1>
      </div>
      {/* ABOUT */}
      <div className='text-center'>
        <p className='text-sm md:text-[1rem] font-normal text-gray-500'>Your comprehensive, smart solution for <br /> accessing detailed medication information, reminders,and alerts.</p>
      </div>
      {/* SOCIAL MEDIA ICONS */}
      <div className='p-2'>
          <div className='flex gap-3 items-center justify-center mb-4'>
            <FaLinkedin className='cursor-pointer' size={30} />
            <FaInstagram className='cursor-pointer' size={30} />
            <FaTwitter className='cursor-pointer' size={30} />
          </div>
      </div>
      {/* COPYRIGHT */}
      <div className='flex items-center justify-center gap-1'>
        <div className='flex font-extrabold text-xs md:text-[1rem]'>
            <h1 className='text-[#63C625]'>MEDI</h1>
            <h1 className='text-black'>TRACK</h1>
        </div>
        <div className='text-xs md:text-[1rem]'>&copy;Copyright 2024. All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer
