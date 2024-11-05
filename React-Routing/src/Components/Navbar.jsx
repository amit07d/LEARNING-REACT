import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 w-full">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-blue-400">
            Home
          </Link>
        </li> 

        <li>
          <Link to="/about" className="text-white hover:text-blue-400">
            About
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="text-white hover:text-blue-400">
            Dashboard
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
