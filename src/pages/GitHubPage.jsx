import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubPage = () => {
  const [username, setUsername] = useState('SwastikShetty06');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handles the search for a GitHub user
  const handleSearch = async (searchUsername) => {
    if (!searchUsername.trim()) {
      setError('Please enter a GitHub username.');
      setUserData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${searchUsername}`);
      setUserData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('User not found. Please check the username.');
      } else {
        setError('An error occurred while fetching data.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch('SwastikShetty06');
  }, []);
  
  // Handle key press to search on Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(username);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-2xl">
      <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">GitHub Search</h1>
        
        {/* Search Input and Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter GitHub username..."
            className="flex-grow w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <button
            onClick={() => handleSearch(username)}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors disabled:bg-purple-400 transform hover:scale-105 duration-300"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Display Area for Error, Loading, or User Data */}
        <div className="mt-8 text-center">
          {error && <p className="text-red-500 font-semibold text-lg">{error}</p>}
          
          {loading && <div className="text-purple-400 text-lg">Loading...</div>}

          {userData && (
            <div className="p-6 bg-gray-700 rounded-lg shadow-inner animate-fade-in transform hover:scale-105 transition-transform duration-500">
              <img
                src={userData.avatar_url}
                alt={`${userData.login}'s avatar`}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-purple-400 shadow-lg"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{userData.name || userData.login}</h2>
              <p className="text-gray-400 mb-4 text-base sm:text-lg">@{userData.login}</p>
              <p className="text-gray-300 mb-4 px-4">{userData.bio || 'No bio available.'}</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-md text-gray-400">
                {userData.location && (
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    {userData.location}
                  </span>
                )}
                 <span className="font-semibold text-white">{userData.followers}</span> Followers
                 <span className="font-semibold text-white">{userData.public_repos}</span> Public Repos
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubPage;

