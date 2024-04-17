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


const App = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <SplashScreen imageUrl="/images/oss.jpg"></SplashScreen>
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

export default App;
