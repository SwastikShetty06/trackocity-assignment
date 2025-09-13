import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="text-center p-6 md:p-10 bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 float-animation">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Welcome to Trackocity</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">Your one-stop productivity hub.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
          <Link to="/todo">
            <button className="px-8 py-3 md:px-10 md:py-4 bg-blue-600 text-white text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:-translate-y-2 transition-all duration-300">
              To-Do List
            </button>
          </Link>
          <Link to="/github">
            <button className="px-8 py-3 md:px-10 md:py-4 bg-purple-600 text-white text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:-translate-y-2 transition-all duration-300">
              GitHub Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
