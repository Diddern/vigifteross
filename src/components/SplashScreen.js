import React, { useEffect, useState, useMemo } from 'react';

const SplashScreen = ({ imageUrl, scrollToRSVPForm }) => {

    const calculateCountdown = (weddingDate) => {
        const currentDate = new Date();
        const timeDifference = weddingDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return `${days} dager ${hours} timer ${minutes} minutter og ${seconds} sekunder`;
    };


    const weddingDate = useMemo(() => new Date('2025-06-21T00:00:00'), []);
    const [countdown, setCountdown] = useState(calculateCountdown(weddingDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown(weddingDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [weddingDate]);


    return (
        <div id="splash">
            <div className="page-header-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="splash-content">
                <h1>Helga og Didrik gifter seg</h1>
                <h3>21.06.2025 kl 12:00</h3>
                <h2 id="countdown"
                    className="d-flex flex-column align-items-center justify-content-center text-white">Det er
                    om {countdown}</h2>
                {/*<button className="rsvp-btn" onClick={scrollToRSVPForm}>RSVP</button>*/}
            </div>
        </div>
    );
};

export default SplashScreen;