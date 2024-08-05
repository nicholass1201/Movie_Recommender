import React, { useState } from 'react';
import '../styles/AIResponse.css';

const AIResponse = () => {
  const [response, setResponse] = useState('');

  const fetchAIResponse = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/fetch-movies/');
      const data = await res.json();
      setResponse(data.recommendations);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setResponse('Error fetching AI response');
    }
  };

  return (
    <div className="ai-response">
      <h2>AI Response</h2>
      <button className="fetch-button" onClick={fetchAIResponse}>Fetch AI Response</button>
      <div className="response">
        {response || 'Click the button to fetch the AI response.'}
      </div>
    </div>
  );
};

export default AIResponse;
