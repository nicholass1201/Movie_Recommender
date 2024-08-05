import React, { useState, useEffect } from 'react';
import '../styles/DatabaseEntries.css';

const DatabaseEntries = () => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/entries/');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error('Error fetching database entries:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="database-entries">
      <h2>Database Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <h3>{entry.title}</h3>
            <p><strong>Score:</strong> {entry.score}</p>
            <p><strong>Reasoning:</strong> {entry.reasoning}</p>
            <p><strong>Timestamp:</strong> {entry.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseEntries;
