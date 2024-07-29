import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [unit, setUnit] = useState('');
    const [availableInEn, setAvailableInEn] = useState(false);
    const [commission, setCommission] = useState(false);
    const [minLevel, setMinLevel] = useState('');
    const [maxLevel, setMaxLevel] = useState('');

    const handleSearch = () => {
        onSearch({ query, unit, availableInEn, commission, minLevel, maxLevel });
    };

    return (
        <div className="search-container">
            <Form>
                <Form.Group controlId="searchQuery">
                    <Form.Control
                        type="text"
                        placeholder="Search by title, Japanese title, or artist"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Accordion className="search-accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Additional Settings</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Group controlId="unitSelect">
                                <Form.Label>Unit</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={unit}
                                    onChange={(e) => setUnit(e.target.value)}
                                >
                                    <option value="">All Units</option>
                                    <option value="VS">VIRTUAL SINGERS</option>
                                    <option value="LN">Leo/Need</option>
                                    <option value="MMJ">MORE MORE JUMP!</option>
                                    <option value="WXS">WonderlandsxShowtime</option>
                                    <option value="VBS">Vivid BAD SQUAD</option>
                                    <option value="N25">25-ji, Nightcord de</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="availableInEn">
                                <Form.Check
                                    type="checkbox"
                                    label="Available in EN"
                                    checked={availableInEn}
                                    onChange={(e) => setAvailableInEn(e.target.checked)}
                                />
                            </Form.Group>
                            <Form.Group controlId="commission">
                                <Form.Check
                                    type="checkbox"
                                    label="Commissioned Song"
                                    checked={commission}
                                    onChange={(e) => setCommission(e.target.checked)}
                                />
                            </Form.Group>
                            <Form.Group controlId="minLevel">
                                <Form.Label>Minimum Level</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={minLevel}
                                    onChange={(e) => setMinLevel(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="maxLevel">
                                <Form.Label>Maximum Level</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={maxLevel}
                                    onChange={(e) => setMaxLevel(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button onClick={handleSearch} className="mt-3">Search</Button>
        </div>
    );
};

export default Home;
