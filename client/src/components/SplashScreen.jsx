import React from 'react';
import { Link } from 'react-router-dom';

function SplashScreen() {
    return (
        <div className="splash-screen">
            <h1>Welcome to SocialBird</h1>
            <p>Post to multiple social media platforms and view analytics in one place.</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
    );
}

export default SplashScreen;
