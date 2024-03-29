import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import RSVPForm from "./RSVPForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const calculateCountdown = (weddingDate) => {
  const currentDate = new Date();
  const timeDifference = weddingDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${days} dager ${hours} timer ${minutes} minutter og ${seconds} sekunder`;
};

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
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
          <h1>Helga og Didrik gifter seg</h1>
          <h3>21.06.2025 kl 12:00</h3>

          <h2 id="countdown" className="d-flex flex-column align-items-center justify-content-center text-white">Det er om {countdown}</h2>

          <button className="rsvp-btn" onClick={scrollToForm}>
            RSVP
          </button>
        </div>

        <div className="scroll-down-arrow fa-2x" onClick={scrollDown}>
          <FontAwesomeIcon icon={faAngleDown }/>
        </div>

        <div id="rsvpForm" className="container mt-5">
          <h2>RSVP</h2>
          <RSVPForm/>
        </div>
      </div>
  );
};

export default App;
