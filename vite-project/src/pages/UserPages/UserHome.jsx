import React from 'react';
import { FaChevronLeft, FaBell, FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons for icons
import AddtoCart from '../UserPages/AddtoCart';
import Scan from '../UserPages/ScanImage';
import QR from '../UserPages/QR';
import UserNav from '../UserPages/Usernav';
function Navbar() {
  return (
    <div>
     <UserNav />
      <AddtoCart />
      <Scan />
      <QR />
      </div>
  );
}

export default Navbar;
