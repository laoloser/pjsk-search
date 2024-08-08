import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Notice 'Routes' instead of 'Switch'
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import DBEntry from './components/dbentry'; // Ensure this import is correct
import "./App.css";
import CSVote from './components/CSVote';
import NukeVotes from './components/NukeVotes';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchParams) => {
    try {
      const query = new URLSearchParams(searchParams).toString();
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/songs?${query}`);
      const data = await response.json();
      setSearchResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching songs:', error);
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div>
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path={process.env.REACT_APP_DB_ENTRY_PATH} element={<DBEntry />} /> {/* Update Route usage */}
          <Route path="/songsearch" element={<><Home onSearch={handleSearch} /><SearchResults results={searchResults} /></>} /> {/* Wrap multiple components in a fragment */}
        <Route path="/csvote" element={<CSVote />} />
        <Route path={process.env.VOTE_WIPE_PATH} element={<NukeVotes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
