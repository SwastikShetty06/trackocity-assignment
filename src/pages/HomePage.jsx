import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="text-center p-10 bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 float-animation">
        <h1 className="text-5xl font-bold mb-6">Welcome to Trackocity!</h1>
        <p className="text-xl mb-8">Your one-stop productivity hub.</p>
        <div className="flex justify-center gap-8">
          <Link to="/todo">
            <button className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:-translate-y-2 transition-all duration-300">
              To-Do List
            </button>
          </Link>
          <Link to="/github">
            <button className="px-10 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:-translate-y-2 transition-all duration-300">
              GitHub Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
