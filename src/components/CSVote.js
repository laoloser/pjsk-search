import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSVote.css";

const CSVote = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);
    const [voteCounts, setVoteCounts] = useState([]); // State to store vote counts

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchVoteCounts();
        }, 1000); // Fetch vote counts every 5 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    const options = [
        { row: 1, items: ['Miku', 'Rin', 'Len', 'Luka', 'Meiko', 'Kaito'] },
        { row: 2, items: ['Ichika', 'Saki', 'Honami', 'Shiho'] },
        { row: 3, items: ['Minori', 'Haruka', 'Airi', 'Shizuku'] },
        { row: 4, items: ['Kohane', 'An', 'Akito', 'Toya'] },
        { row: 5, items: ['Tsukasa', 'Emu', 'Nene', 'Rui'] },
        { row: 6, items: ['Kanade', 'Mafuyu', 'Ena', 'Mizuki'] }
    ];

    useEffect(() => {
        fetchVoteCounts();
    }, []);

    const fetchVoteCounts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/csvote`);
            if (response.ok) {
                const data = await response.json();
                // Sort the data in descending order by count before setting state
                const sortedData = data.sort((a, b) => b.count - a.count);
                setVoteCounts(sortedData);
            } else {
                throw new Error('Failed to fetch vote counts');
            }
        } catch (error) {
            console.error('Error fetching vote counts:', error);
            toast.error('Error fetching vote counts');
        }
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedOption) {
            toast.warn('Please select an option before submitting!');
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/csvote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ vote: selectedOption }) // Only send the selected option
            });
            if (response.ok) {
                toast.success('Vote submitted successfully');
                setSelectedOption(null); // Clear selection
                setHasVoted(true); // Prevent further voting
            } else {
                throw new Error('Failed to submit vote');
            }
        } catch (error) {
            console.error('Error submitting vote:', error);
            toast.error('Error submitting vote');
        }
    };

    return (
        <div>
            <h1>Challenge Show Votes</h1>
            {!hasVoted ? (
                <form onSubmit={handleSubmit}>
                    {options.map((group, index) => (
                        <div key={index} className="option-row">
                            {group.items.map(option => (
                                <button
                                    key={option}
                                    type="button"
                                    className={`option ${selectedOption === option ? 'selected' : ''}`}
                                    onClick={() => handleSelectOption(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="submit-vote">Submit Vote</button>
                </form>
            ) : (
                <p>Thank you for your vote!</p>
            )}
            {voteCounts.length > 0 && (
                <div>
                    <h2>Ranking</h2>
                    <ul>
                        {voteCounts.map(vote => (
                            <li key={vote.vote}>{vote.vote}: {vote.count} votes</li>
                        ))}
                    </ul>
                </div>
            )}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default CSVote;
