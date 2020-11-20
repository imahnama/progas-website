import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Layout from '../components/Layout';
import Bike from '../images/bike1.png';

export default function GetProgasThankYouPage() {
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
              Thank you for being in touch! A representative from our call
              centre will reach out shortly. <br></br>
              <br></br>
              Polite reminder Our operating hours are: <br></br>
              Weekdays: 7am-7pm <br></br>
              Weekends: 7:30am-5:30pm
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
