import React, { useState } from 'react';
import Home from './components/Home';
import SearchResults from './components/SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchParams) => {
    try {
      const query = new URLSearchParams(searchParams).toString();
      const response = await fetch(`https://pjsk-search-backend-production.up.railway.app/songs?${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching songs:', error);
      setSearchResults([]); // Ensure searchResults is always an array
    }
  };

  return (
    <div>
      <Home onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
