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
              Thank you for expressing interest in becoming a ProGas retail
              partner! A member of our sales team will be in touch soon to
              discuss.
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
