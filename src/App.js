import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import SongResults from './components/SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchParams) => {
    console.log('Search params:', searchParams);
    // Convert searchParams object to a query string
    const queryString = new URLSearchParams(searchParams).toString();
    console.log('Query string:', queryString);

    try {
      const response = await fetch(`https://pjsk-search-backend-production.up.railway.app/songs?${queryString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response);
      const data = await response.json();
      console.log('Data:', data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <Router>
      <div>
        <Home onSearch={handleSearch} />
        <SongResults results={searchResults} />
      </div>
    </Router>
  );
};

export default App;
