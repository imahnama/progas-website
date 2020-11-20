import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Layout from '../components/Layout';
import Bike from '../images/bike1.png';

export default function SellProgasThankYouPage() {
  return (
    <Layout>
      <Container className="get-form">
        <Row className="section-heading">
          <Col>
            <h1>Become a Pro</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <h4 className="thanks-note">
              Thank You! Our call center opens at 7am and a member of our team
              will be in touch within an hour of opening.
            </h4>
          </Col>
          <Col sm={6} className="bike">
            <Image src={Bike} responsive />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
