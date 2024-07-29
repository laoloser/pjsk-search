import React, { useState } from 'react';
import Home from './components/Home';
import SearchResults from './components/SearchResults'; // Assuming you have a component to display results

const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (searchParams) => {
        try {
            const response = await fetch('https://pjsk-search-backend-production.up.railway.app/songs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                params: searchParams,
            });
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    return (
        <div>
            <Home onSearch={handleSearch} />
            <SearchResults results={searchResults} /> {/* Render the search results */}
        </div>
    );
};

export default App;
