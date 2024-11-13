import React, { useState } from 'react';
import '../styles/AIResponse.css';

const AIResponse = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAIResponse = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    try {
      const res = await fetch('http://127.0.0.1:8000/api/fetch-movies/');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setResponse(data.recommendations);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setError('Error fetching AI response');
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-response">
      <h2>AI Response</h2>
      <button className="fetch-button" onClick={fetchAIResponse} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch AI Response'}
      </button>
      <div className="response">
        {loading ? (
          'Loading...'
        ) : error ? (
          <span className="error-message">{error}</span>
        ) : (
          response || 'Click the button to fetch the AI
