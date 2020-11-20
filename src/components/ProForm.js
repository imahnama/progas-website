import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GetProForm from './GetProForm';
import SellProForm from './SellProForm';

export default function ProForm() {
  return (
    <Container className="form-container" id="getprogas">
      <Row className="become-pro">
        <h1>Become A Pro</h1>
      </Row>
      <Row className="main-div">
        <Col className="progas-section">
          <GetProForm />
        </Col>
        <Col className="progas-section">
          <SellProForm />
        </Col>
      </Row>
    </Container>
  );
}
