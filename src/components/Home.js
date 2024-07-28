import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Home = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [unit, setUnit] = useState('all');
  const [availableInEn, setAvailableInEn] = useState(false);
  const [commission, setCommission] = useState(false);
  const [minLevel, setMinLevel] = useState('');
  const [maxLevel, setMaxLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ term, unit, availableInEn, commission, minLevel, maxLevel });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search..."
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              as="select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="all">All Units</option>
              <option value="unit1">Unit 1</option>
              <option value="unit2">Unit 2</option>
              {/* Add more units as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Available in EN"
              checked={availableInEn}
              onChange={() => setAvailableInEn(!availableInEn)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Commission"
              checked={commission}
              onChange={() => setCommission(!commission)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="number"
              value={minLevel}
              onChange={(e) => setMinLevel(e.target.value)}
              placeholder="Min Level"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              type="number"
              value={maxLevel}
              onChange={(e) => setMaxLevel(e.target.value)}
              placeholder="Max Level"
            />
          </Form.Group>
        </Col>
      </Row>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Home;
