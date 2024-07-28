import React from 'react';

const SearchResults = ({ results }) => {
  if (!Array.isArray(results)) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.japanese_title}</p>
          <p>{result.artist}</p>
          <p>{result.unit}</p>
          <p>Level: {result.level}</p>
          <p>BPM: {result.bpm}</p>
          <p>Note Count: {result.note_count}</p>
          <p>Duration: {result.duration}</p>
          <p>Available in EN: {result.available_in_en ? 'Yes' : 'No'}</p>
          <p>Commissioned: {result.commission ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
