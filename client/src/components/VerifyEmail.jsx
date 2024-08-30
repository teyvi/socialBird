import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verify = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/users/verify-email/${token}`);
                const data = await response.json();
                setMessage(data.message || 'Email verification successful');
            } catch (error) {
                setMessage('Failed to verify email');
            }
        };
        verify();
    }, [token]);

    return (
        <div>
            <h2>Email Verification</h2>
            <p>{message}</p>
        </div>
    );
};

export default VerifyEmail;
