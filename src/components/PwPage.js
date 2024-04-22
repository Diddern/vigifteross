import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PwPage = () => {
    const [dateForWedding, setDateForWedding] = useState('');
    const [redirectToProtectedPage, setRedirectToProtectedPage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Slutt å snoke i kildekoden...
        if (dateForWedding.replace(/[^\w\s]/g, '') === '21062025') {
            setRedirectToProtectedPage(true);
        } else {
            alert('Feil bryllupsdato. Den står på invitasjonen');
        }
    };

    if (redirectToProtectedPage) {
        return <Navigate to="/vigifteross" />;
    }

    return (
        <div className="PwContainer">
            <h1>Helga og Didrik gifter seg ❤️</h1>
            <h2>Skriv inn dato for bryllupet (står på invitasjonen)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="01.01.2000"
                    value={dateForWedding}
                    onChange={(e) => setDateForWedding(e.target.value)}
                />
                <button type="submit"><FontAwesomeIcon icon={faArrowRight }/></button>
            </form>
        </div>
    );
};
export default PwPage;