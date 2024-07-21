import React from 'react';
import Image from '../images/WhatsApp Image 2024-05-21 at 10.52.29 AM.jpeg';

function Contact() {
  return (
    <div className='mx-2 md:mx-10 my-3'>
      <h1 className='font-semibold text-3xl'>Contact Us</h1>
      <div className='flex flex-col-reverse md:flex-row items-center justify-evenly mt-5 p-2 border-2 border-[#63C625] rounded-xl'>
        <div className='flex flex-col items-center p-2'>
          <div className='flex font-extrabold text-lg md:text-3xl mb-3'>
            <h1 className='text-[#63C625]'>MEDI</h1>
            <h1 className='text-black'>TRACK</h1>
          </div>
          <form className='grid grid-cols-1 gap-1'>
            <input 
              type='text' 
              placeholder='NAME' 
              className='p-3 m-2 md:m-1 border-2 border-[#63C625] rounded-md w-[80vw] md:w-[40vw] md:text-[0.75rem] h-16' />
            <input 
              type='email' 
              placeholder='EMAIL' 
              className='p-3 m-2 md:m-1 border-2 border-[#63C625] rounded-md w-[80vw] md:w-[40vw] md:text-[0.75rem] h-16' />
            <textarea
              placeholder='MESSAGE' 
              className='p-3 m-2 md:m-1 border-2 border-[#63C625] rounded-md w-[80vw] md:w-[40vw] md:text-[0.75rem] h-24' ></textarea>
            <button className='p-3 m-2 md:m-1 border-2 border-[#63C625] rounded-md w-[80vw] md:w-[25%] text-[#63C625] font-bold hover:text-white hover:bg-[#63C625]'>SUBMIT</button>
          </form>
        </div>
        <div className='hidden md:block'>
          <img src={Image} alt='' className='w-[573px] h-[462px]' />
        </div>
      </div>
    </div>
  );
}

export default Contact;
