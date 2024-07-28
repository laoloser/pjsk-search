import React, { useState } from 'react';
import { Accordion, Button, Form, Row, Col } from 'react-bootstrap';
import './Home.css'; // Assuming you have a CSS file for custom styles

const Home = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [minBpm, setMinBpm] = useState('');
  const [maxBpm, setMaxBpm] = useState('');
  const [unit, setUnit] = useState('');
  const [minLevel, setMinLevel] = useState('');
  const [maxLevel, setMaxLevel] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');
  const [minNoteCount, setMinNoteCount] = useState('');
  const [maxNoteCount, setMaxNoteCount] = useState('');
  const [availableInEn, setAvailableInEn] = useState(false);
  const [difficulty, setDifficulty] = useState([]);
  const [commission, setCommission] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDifficulty((prevDifficulties) => {
      if (checked) {
        return [...prevDifficulties, name];
      } else {
        return prevDifficulties.filter((difficulty) => difficulty !== name);
      }
    });
  };

  const handleSearch = () => {
    onSearch({
      query,
      minBpm,
      maxBpm,
      unit,
      minLevel,
      maxLevel,
      minDuration,
      maxDuration,
      minNoteCount,
      maxNoteCount,
      availableInEn,
      difficulty: difficulty.join(','),
      commission
    });
  };

  return (
    <div className="container mt-5">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Title Search</Accordion.Header>
          <Accordion.Body>
            <Form.Group controlId="query">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, Japanese title, or artist"
              />
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Additional Settings</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Label>BPM</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="lowest"
                        value={minBpm}
                        onChange={(e) => setMinBpm(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="highest"
                        value={maxBpm}
                        onChange={(e) => setMaxBpm(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form.Label>Level</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="lowest"
                        value={minLevel}
                        onChange={(e) => setMinLevel(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="highest"
                        value={maxLevel}
                        onChange={(e) => setMaxLevel(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Label>Duration</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="lowest"
                        value={minDuration}
                        onChange={(e) => setMinDuration(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="highest"
                        value={maxDuration}
                        onChange={(e) => setMaxDuration(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form.Label>Note Count</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="lowest"
                        value={minNoteCount}
                        onChange={(e) => setMinNoteCount(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="highest"
                        value={maxNoteCount}
                        onChange={(e) => setMaxNoteCount(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Form.Group controlId="unit" className="mb-3">
                <Form.Control
                  as="select"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="">All Units</option>
                  <option value="VIRTUAL SINGERS">VIRTUAL SINGERS</option>
                  <option value="Leo/Need">Leo/Need</option>
                  <option value="MORE MORE JUMP!">MORE MORE JUMP!</option>
                  <option value="Vivid BAD SQUAD">Vivid BAD SQUAD</option>
                  <option value="WonderlandsxShowtime">WonderlandsxShowtime</option>
                  <option value="25-ji Nightcore de">25-ji Nightcore de</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="difficulties" className="mb-3">
                <Form.Label>Difficulty</Form.Label>
                <div className="d-flex flex-wrap justify-content-between">
                  {['Easy', 'Normal', 'Hard', 'Expert', 'Master', 'Append'].map((difficulty) => (
                    <Form.Check
                      key={difficulty}
                      type="checkbox"
                      label={difficulty}
                      name={difficulty}
                      onChange={handleCheckboxChange}
                      className="me-3"
                    />
                  ))}
                </div>
              </Form.Group>

              <Row className="mb-3">
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Available in EN"
                    checked={availableInEn}
                    onChange={(e) => setAvailableInEn(e.target.checked)}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Commissioned Song"
                    checked={commission}
                    onChange={(e) => setCommission(e.target.checked)}
                  />
                </Col>
              </Row>

              <Button variant="primary" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Home;
