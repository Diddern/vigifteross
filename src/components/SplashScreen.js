import React from 'react';

const SplashScreen = ({ imageUrl, children }) => {
    return (
        <div id="splash">
            <div className="page-header-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div>{children}</div>
        </div>
    );
};

export default SplashScreen;