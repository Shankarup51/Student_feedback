
import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ userRole }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded pl-8 pr-4 py-1"
          />
          <FaSearch className="absolute top-2 left-2 text-gray-400" />
        </div>
        <div className="text-sm text-right">
          <div>
            {userRole === 'admin'
              ? "Admin’s portal"
              : userRole === 'faculty'
              ? "Professor"
              : "Student"}
          </div>
          <div className="font-semibold">{user?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;