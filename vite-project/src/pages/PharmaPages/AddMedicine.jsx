import React, { useState } from 'react';
import Back from '../../components/Back';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react'; // Import QRCode from qrcode.react

function AddMedicine() {
  const navigate = useNavigate();

  const [medicineData, setMedicineData] = useState({
    name: '',
    mfd: '',
    exp: '',
    use: ''
  });

  const [showQRCode, setShowQRCode] = useState(false); // State to control QR code display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Submitted data:', medicineData);
    // Generate QR code
    setShowQRCode(true);
    
  };


  const handleFocus = (e) => {
    e.target.type = 'date';
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.type = 'text';
    }
  };

  return (
    <div className='m-5 md:m-10'>
      <div className='flex flex-col md:flex-row justify-between gap-3'>
        <Back to='/pharma' text='ADD MEDICINE!' />
        <button
          onClick={() => navigate('/pharma/view-medicines')}
          className='bg-[#63C625] text-black md:font-semibold p-1 md:p-3 rounded-md'
        >
          VIEW MEDICINES
        </button>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='m-5 text-xl font-semibold text-left md:w-[50vw]'>ENTER PHARMA DETAILS</h1>
        <form onSubmit={handleSubmit} className='m-5 mt-0 md:w-[50vw]'>
          {/* Form inputs */}
          <input
            type='text'
            id='name'
            name='name'
            placeholder='MEDICINE NAME'
            value={medicineData.name}
            onChange={handleChange}
            required
            className='border-black border-solid border-2 p-2 rounded-md w-full mt-2 placeholder-black'
          />
          <div className='flex flex-col md:flex-row gap-1'>
            <input
              type='text'
              id='mfd'
              name='mfd'
              placeholder='MANUFACTURING DATE (dd-mm-yyyy)'
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={medicineData.mfd}
              onChange={handleChange}
              required
              className='border-black text-black border-solid border-2 p-2 rounded-md w-full mt-2 placeholder-black'
            />
            <input
              type='text'
              id='exp'
              name='exp'
              placeholder='EXPIRY DATE (dd-mm-yyyy)'
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={medicineData.exp}
              onChange={handleChange}
              required
              className='border-black text-black border-solid border-2 p-2 rounded-md w-full mt-2 placeholder-black'
            />
          </div>
          <textarea
            id='use'
            name='use'
            placeholder='USAGE'
            value={medicineData.use}
            onChange={handleChange}
            required
            rows={4}
            className='border-black text-black border-solid border-2 p-2 rounded-md w-full mt-2 placeholder-black'
          />
          <button
            type='submit'
            className='border-black text-black hover:bg-black hover:text-white border-solid border-2 p-2 rounded-md w-full mt-2'
          >
            ADD MEDICINE
          </button>
        </form>
        {/* Conditionally render QR code */}
        {showQRCode && (
          <div className='flex flex-col items-center gap-2 mt-5'>
            QR Code for the given data!!
            <QRCode value={JSON.stringify(medicineData)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AddMedicine;
