import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-3 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold tracking-wider">Trackocity</NavLink>
        <div className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>Home</NavLink>
          <NavLink to="/todo" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>To-Do</NavLink>
          <NavLink to="/github" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>GitHub</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLink to="/" className={({ isActive }) => `block text-white py-2 px-4 hover:bg-gray-700 rounded ${isActive ? "font-bold text-blue-400" : ""}`}>Home</NavLink>
          <NavLink to="/todo" className={({ isActive }) => `block text-white py-2 px-4 hover:bg-gray-700 rounded ${isActive ? "font-bold text-blue-400" : ""}`}>To-Do</NavLink>
          <NavLink to="/github" className={({ isActive }) => `block text-white py-2 px-4 hover:bg-gray-700 rounded ${isActive ? "font-bold text-blue-400" : ""}`}>GitHub</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
