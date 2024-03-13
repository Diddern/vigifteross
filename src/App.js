import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const calculateCountdown = (weddingDate) => {
  const currentDate = new Date();
  const timeDifference = weddingDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  return `${days} dager ${hours} timer ${minutes} minutter`;
};

const App = () => {
  const weddingDate = useMemo(() => new Date('2025-06-21T00:00:00'), []);
  const [countdown, setCountdown] = useState(calculateCountdown(weddingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const scrollToForm = () => {
    document.getElementById('rsvpForm').scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div>
        <div id="splash" className="d-flex flex-column align-items-center justify-content-center text-white">
          <h1>Your Wedding</h1>
          <div id="countdown" className="display-4 mb-4">{countdown}</div>
          <button id="rsvpButton" className="btn btn-success" onClick={scrollToForm}>
            RSVP Now
          </button>
        </div>

        <div id="rsvpForm" className="container mt-5">
          <h2>RSVP Form</h2>
          {/* Your RSVP form goes here */}
        </div>
      </div>
  );
};

export default App;
