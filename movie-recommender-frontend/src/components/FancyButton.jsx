import React from 'react';
import '../styles/FancyButton.css';

const FancyButton = ({ text, onClick }) => {
  return (
    <button className="fancy-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default FancyButton;
