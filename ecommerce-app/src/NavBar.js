import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white">
      <ul className="flex justify-start space-x-0 ml-3">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="data:image/png;base64,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"
            className="h-14"
            alt="Uniqlo Logo"
          />
        </Link>
        <li className="mr-6 font-bold p-6">
          <Link to="/women" className="text-300 no-underline hover:underline">
            WOMEN
          </Link>
        </li>
        <li className="mr-6 font-bold p-6">
          <Link to="/men" className="text-300 no-underline hover:underline">
            MEN
          </Link>
        </li>
        <li className="mr-6 font-bold p-6">
          <Link to="/kids" className="text-300 no-underline hover:underline">
            KIDS
          </Link>
        </li>
        <li className="mr-6 font-bold p-6">
          <Link to="/baby" className="text-300 no-underline hover:underline">
            BABY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
