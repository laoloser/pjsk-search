import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = ({ results }) => {
  const location = useLocation();
  console.log('Location:', location);

  return (
    <div>
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {results.map((song, index) => (
            <li key={index}>{song.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
