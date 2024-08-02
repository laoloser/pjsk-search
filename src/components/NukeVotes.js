// NukeVotes.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NukeVotes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const resetVotes = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/reset-csvote`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Custom-Auth': 'muku' // Ensure this key is secure
                    }
                });

                if (response.ok) {
                    toast.success('All votes have been reset successfully.');
                } else {
                    throw new Error('Failed to reset votes');
                }
            } catch (error) {
                console.error('Error resetting votes:', error);
                toast.error('Error resetting votes');
            }

            // Navigate back or do another action after a delay
            setTimeout(() => navigate('/csvote'), 2000); // Navigate after showing the toast
        };

        resetVotes();
    }, [navigate]);

    return (
        <div>
            <h1>Resetting Votes...</h1>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"  />
        </div>
    );
};

export default NukeVotes;
