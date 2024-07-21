import React from 'react';
import Back from '../../components/Back';
import Footer from '../../components/Footer';
import Image from '../../images/MT_Hero.png';
import { useNavigate } from 'react-router-dom';

function PharmaHome() {
    const navigate = useNavigate();
  return (
    <div>
      <div className='m-5 md:m-10'>
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          <Back to='/' text='MEDITRACK' />
          <div className='flex items-center justify-center gap-3'>
            <button
              onClick={() => navigate('/pharma/add-medicine')}
              className='bg-[#63C625] text-black md:font-semibold p-1 md:p-3 rounded-md'
            >
              + ADD MEDICINE
            </button>
            <button 
              onClick={() => navigate('/pharma/view-medicines')}
              className='bg-[#63C625] text-black md:font-semibold p-1 md:p-3 rounded-md'>
              VIEW MEDICINES
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3 md:m-5 items-center'>
          <div className='flex flex-col gap-2 p-2'>
            <div className='text-3xl font-semibold'>WELCOME TO</div>
            <div className='flex flex-row text-4xl font-extrabold'>
              <p className='text-[#63C625]'>MEDI</p>
              <p className='text-black'>TRACK</p>
            </div>
            <div className='text-2xl font-semibold'>PHARMA</div>
            <p className='text-sm md:text-xl'>
              By providing users with information about the medicines' manufacturing and expiry dates,
              we empower them to use their medication wisely, ultimately reducing medical hazardous waste.
              Users receive timely notifications about upcoming expiration dates and a daily reminder
              to stay on track with their medication schedules.
            </p>
          </div>
          <div className="flex justify-center p-2">
            <img src={Image} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PharmaHome;
