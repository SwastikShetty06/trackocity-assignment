import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-3 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold tracking-wider">Trackocity</NavLink>
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>Home</NavLink>
          <NavLink to="/todo" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>To-Do</NavLink>
          <NavLink to="/github" className={({ isActive }) => `text-white hover:text-blue-400 transition-colors duration-300 ${isActive ? "font-bold text-blue-400" : ""}`}>GitHub</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
