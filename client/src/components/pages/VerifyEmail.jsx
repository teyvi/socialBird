import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const [message, setMessage] = useState('An email has been sent to your address. Please check your inbox and click the verification link.');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if we were redirected here after registration
        const params = new URLSearchParams(location.search);
        const fromRegistration = params.get('fromRegistration');
        
        if (!fromRegistration) {
            // If not from registration, redirect to home or login
            navigate('/login');
        }
    }, [navigate, location]);

    return (
        <div className="font-mono bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Email Verification</h2>
                <p className="text-gray-700 text-center">{message}</p>
                <div className="mt-6 text-center">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;