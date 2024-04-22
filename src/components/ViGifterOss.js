import React from 'react';
import SplashScreen from './SplashScreen';
import Om from "./About";
import PraktiskInfo from "./PraktiskInfo"
import RSVPForm from "./RSVPForm";
import Overnatting from "./Overnatting";
import Kart from "./Kart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';

const ViGifterOss = () => {
    const scrollDown = () => {
        const omBrudeparet = document.getElementById('om-brudeparet');
        window.scrollBy({
            top: omBrudeparet.offsetTop,
            behavior: 'smooth',
        });
    };
    const scrollToRSVPForm = () => {
        console.log("Haaai")
        const rsvpForm = document.getElementById('rsvpForm');
        if (rsvpForm) {
            console.log("Hello")
            window.scrollTo({
                top: rsvpForm.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <SplashScreen imageUrl="/images/oss.jpg" scrollToRSVPForm={scrollToRSVPForm}></SplashScreen>
            <div className="scroll-down-arrow fa-2x" onClick={scrollDown}>
                <FontAwesomeIcon icon={faAngleDown }/>
            </div>
            <Om/>
            <PraktiskInfo/>
            <RSVPForm/>
            <Overnatting/>
            <Kart/>
        </div>
    );
}

export default ViGifterOss;
