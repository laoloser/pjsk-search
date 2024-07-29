import React, { useState } from 'react';
import "./Home.css";

const Home = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [unit, setUnit] = useState('all'); // Default to all units
  const [availableInEn, setAvailableInEn] = useState(false);
  const [commission, setCommission] = useState(false);
  const [minLevel, setMinLevel] = useState('');
  const [maxLevel, setMaxLevel] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      term,
      unit: unitMap[unit], // Use the mapping
      availableInEn,
      commission,
      minLevel,
      maxLevel,
    };
    onSearch(searchParams);
  };

  const unitMap = {
    'all': 'all',
    'VIRTUAL SINGERS': 'VS',
    'Leo/Need': 'LN',
    'MORE MORE JUMP!': 'MMJ',
    'WonderlandsxShowtime': 'WXS',
    'Vivid BAD SQUAD': 'VBS',
    '25-ji, Nightcord de': 'N25',
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label>Search Term:</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>
        <label>Unit:</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="all">All Units</option>
          <option value="VIRTUAL SINGERS">VIRTUAL SINGERS</option>
          <option value="Leo/Need">Leo/Need</option>
          <option value="MORE MORE JUMP!">MORE MORE JUMP!</option>
          <option value="WonderlandsxShowtime">WonderlandsxShowtime</option>
          <option value="Vivid BAD SQUAD">Vivid BAD SQUAD</option>
          <option value="25-ji, Nightcord de">25-ji, Nightcord de</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={availableInEn}
            onChange={(e) => setAvailableInEn(e.target.checked)}
          />
          Available in EN
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={commission}
            onChange={(e) => setCommission(e.target.checked)}
          />
          Commissioned Song
        </label>
      </div>
      <div>
        <label>Min Level:</label>
        <input
          type="number"
          value={minLevel}
          onChange={(e) => setMinLevel(e.target.value)}
        />
      </div>
      <div>
        <label>Max Level:</label>
        <input
          type="number"
          value={maxLevel}
          onChange={(e) => setMaxLevel(e.target.value)}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Home;
