import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmailVerifiedSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('Verifying your email...');

    useEffect(() => {
        const verifyEmail = async () => {
            const params = new URLSearchParams(location.search);
            const token = params.get('token');

            if (!token) {
                setMessage('Check your email for the verification link');
                return;
            }

            try {
                const response = await fetch(`${process.env.REACT_APP_ENDPOINT}verify-email/${token}`);
                const data = await response.json();
                
                if (data.message === 'Email verified successfully') {
                    setMessage('Your email has been successfully verified. You can now log in to your account.');
                } else {
                    setMessage('Failed to verify email. Please try again or contact support.');
                }
            } catch (error) {
                console.error('Failed to verify email:', error);
                setMessage('An error occurred while verifying your email. Please try again later.');
            }
        };

        verifyEmail();
    }, [location]);

    return (
        <div className="font-mono bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4 text-center text-amber-300">Email Verification</h3>
                <p className="text-gray-700 text-center">{message}</p>
                <div className="mt-6 text-center">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="bg-amber-300 hover:bg-slate-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailVerifiedSuccess;