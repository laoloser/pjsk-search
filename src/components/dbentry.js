import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./dbentry.css";

const initialEntryState = {
  title: '',
  japanese_title: '',
  artist: '',
  level: '',
  bpm: '',
  duration: '',
  unit: 'VS', // Set default value to 'VS'
  note_count: '',
  available_in_en: 'Available in EN?',
  difficulty: '',
  commission: 'Commissioned?'
};

const DBEntry = () => {
  // Initialize state for a single entry
  const [entry, setEntry] = useState(initialEntryState);

  // Handle input change for all fields
  const handleChange = (field, value) => {
    setEntry(prevEntry => ({ ...prevEntry, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an API request to your backend
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry) // Ensure that the entry is correctly formatted
      });
      if (response.ok) {
        toast.success('Entry submitted successfully');
        // Do not reset fields
      } else {
        toast.error('Failed to submit entry');
      }
    } catch (error) {
      console.error('Error submitting entry:', error);
      toast.error('Error submitting entry');
    }
  };

  // Reset form to initial state
  const handleClear = () => {
    setEntry(initialEntryState);
    toast.info('Form cleared');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form'>
        {/* Input fields */}
        <input type="text" placeholder="Title" value={entry.title} onChange={(e) => handleChange('title', e.target.value)} />
        <input type="text" placeholder="Japanese Title" value={entry.japanese_title} onChange={(e) => handleChange('japanese_title', e.target.value)} />
        <input type="text" placeholder="Artist" value={entry.artist} onChange={(e) => handleChange('artist', e.target.value)} />
        <input type="number" placeholder="Level" value={entry.level} onChange={(e) => handleChange('level', e.target.value)} />
        <input type="number" placeholder="BPM" value={entry.bpm} onChange={(e) => handleChange('bpm', e.target.value)} />
        <input type="number" placeholder="Duration" value={entry.duration} onChange={(e) => handleChange('duration', e.target.value)} />
        <select value={entry.unit} onChange={(e) => handleChange('unit', e.target.value)}>
          <option value="VS">VS</option>
          <option value="LN">LN</option>
          <option value="MMJ">MMJ</option>
          <option value="WSX">WSX</option>
          <option value="VBS">VBS</option>
          <option value="N25">N25</option>
          <option value="other">Other</option>
        </select>
        <input type="number" placeholder="Note Count" value={entry.note_count} onChange={(e) => handleChange('note_count', e.target.value)} />
        <select value={entry.available_in_en.toString()} onChange={(e) => handleChange('available_in_en', e.target.value === 'true')}>
        <option>Available in EN ?</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <select value={entry.difficulty} onChange={(e) => handleChange('difficulty', e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
          <option value="Expert">Expert</option>
          <option value="Master">Master</option>
          <option value="Append">Append</option>
        </select>
        <select value={entry.commission.toString()} onChange={(e) => handleChange('commission', e.target.value === 'true')}>
        <option>Commission?</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <button type="submit">Submit Entry</button>
      <button type="button" onClick={handleClear}>Clear</button> {/* Add a clear button */}
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </form>
  );
};

export default DBEntry;
