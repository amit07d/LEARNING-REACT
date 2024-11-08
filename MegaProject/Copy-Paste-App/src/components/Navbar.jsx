import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center py-4">
      <ul className="flex space-x-8">
        <li className="text-xl">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li className="text-xl">
          <Link to="/pastes" className="text-blue-500 hover:text-blue-700">
            Pastes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
