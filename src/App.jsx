import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import GitHubPage from './pages/GitHubPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/github" element={<GitHubPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

