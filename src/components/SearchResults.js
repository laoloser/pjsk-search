
import React from 'react';
import Table from 'react-bootstrap/Table';
import "./SearchResults.css";

const SearchResults = ({ results }) => {
  if (!Array.isArray(results)) {
    return <p>No results found.</p>;
  }

  return (
    <Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Japanese Title</th>
          <th>Artist</th>
          <th>Unit</th>
          <th>Difficulty</th>
          <th>Level</th>
          <th>BPM</th>
          <th>Note Count</th>
          <th>Duration</th>
          <th>Available in EN</th>
          <th>Commissioned</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={result.id}>
            <td>{result.title}</td>
            <td>{result.japanese_title}</td>
            <td>{result.artist}</td>
            <td>{result.unit}</td>
            <td>{result.difficulty}</td>
            <td>{result.level}</td>
            <td>{result.bpm}</td>
            <td>{result.note_count}</td>
            <td>{result.duration}</td>
            <td>{result.available_in_en ? 'Yes' : 'No'}</td>
            <td>{result.commission ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SearchResults;
