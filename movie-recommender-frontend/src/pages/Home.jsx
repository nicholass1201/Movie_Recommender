import React from 'react';
import { useNavigate } from 'react-router-dom';
import FancyButton from '../components/FancyButton';

const Home = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  return (
    <div className="home-container">
      <h1>Welcome to the Movie Recommender</h1>
      <FancyButton onClick={() => navigate('/ai-response')}>Fetch AI Response</FancyButton>
      <FancyButton onClick={() => navigate('/database-entries')}>View Database Entries</FancyButton>
    </div>
  );
};

export default Home;
