import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIResponse from './pages/AIResponse';
import DatabaseEntries from './pages/DatabaseEntries';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-response" element={<AIResponse />} />
          <Route path="/database-entries" element={<DatabaseEntries />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
