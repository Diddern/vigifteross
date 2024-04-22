import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PwPage from './PwPage';
import ViGifterOss from './ViGifterOss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PwPage />} />
                <Route path="/vigifteross" element={<ViGifterOss />} />
            </Routes>
        </Router>
    );
};

export default App;