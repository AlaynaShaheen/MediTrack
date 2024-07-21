import React, { useState } from 'react';
import Back from '../../components/Back';
import { FaSearch, FaTrash } from 'react-icons/fa'; // Import FaTrash for delete symbol
import { useNavigate } from 'react-router-dom';

function ViewMedicines({ medicines }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [isRemoveMode, setIsRemoveMode] = useState(false); // State to track remove mode

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const toggleSelectMedicine = id => {
    if (selectedMedicines.includes(id)) {
      setSelectedMedicines(selectedMedicines.filter(medId => medId !== id));
    } else {
      setSelectedMedicines([...selectedMedicines, id]);
    }
  };

  const handleDeleteSelected = () => {
    // Implement your delete logic here
    console.log('Deleting selected medicines:', selectedMedicines);
    setSelectedMedicines([]); // Clear selected medicines after delete
  };

  return (
    <div className='m-5 md:m-10'>
      <div className='flex flex-col md:flex-row gap-3 justify-between'>
        <Back to='/pharma' text='VIEW MEDICINES' />
        <div className='relative'>
          <input
            type='search'
            placeholder='SEARCH'
            value={searchQuery}
            onChange={handleSearchChange}
            className='border-black placeholder:text-black border-solid border-2 p-1 rounded-md pl-8 w-full md:w-auto'
          />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaSearch className='text-black' />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-2 mt-5 p-3 font-semibold'>
        <div className='flex gap-1'>
          <p className='text-black'>Company Name: </p>
          <p className='text-[#63C625]'>Apollo</p>
        </div>
        <div className='flex gap-1'>
          <p className='text-black'>Email: </p>
          <p className='text-[#63C625]'>Apollopharma@gmail.com</p>
        </div>
        <div className='flex gap-1 text-xs md:text-sm'>
          <button
            onClick={() => navigate('/pharma/add-medicine')}
            className='bg-[#63C625] text-black p-1 md:p-2 rounded-md'>+ ADD MEDICINE</button>
          <button
            onClick={() => setIsRemoveMode(!isRemoveMode)} // Toggle remove mode
            className='bg-[#63C625] text-black p-1 md:p-2 rounded-md'>- REMOVE MEDICINES</button>
        </div>
      </div>
      {isRemoveMode && ( // Conditionally render delete button
        <div className='flex items-center mt-3'>
          <button
            onClick={handleDeleteSelected}
            className='bg-[#F87171] text-black p-1 rounded-md mr-2 flex items-center'
          >
            <FaTrash className='mr-1' />
            Delete Selected
          </button>
        </div>
      )}
      <div className='overflow-x-auto mt-5 rounded-lg'>
        <table className='min-w-full md:w-[50vw] mx-auto divide-y divide-gray-200'>
          <thead className='bg-[#63C625]'>
            <tr>
              {isRemoveMode && ( // Conditionally render checkbox header
                <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                  Select
                </th>
              )}
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                S.No
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                Medicine Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                MFD
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                EXP
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>
                QR Code Link
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {filteredMedicines.map((medicine, index) => (
              <tr key={medicine.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                {isRemoveMode && (
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <input
                      type='checkbox'
                      checked={selectedMedicines.includes(medicine.id)}
                      onChange={() => toggleSelectMedicine(medicine.id)}
                    />
                  </td>
                )}
                <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{medicine.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{medicine.mfd}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{medicine.exp}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <a href={medicine.qrCodeLink} target='_blank' rel='noopener noreferrer' className='text-blue-500'>QR Code</a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ViewMedicines;
