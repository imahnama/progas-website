import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap/';
import protoImage from '../Gallery/protoImagery.png';
import safetyImage from '../Gallery/safetyImage.png';

export default function SafetyPack() {
  return (
    <section className="safe-section mt-5">
      <Container>
        <Row>
          <Col>
            <Image className="protoimg" src={protoImage} fluid />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://protoenergy.com/careers/"
            >
              <Button className="form-btn-safe pro-btn safety-button">
                Visit Our Parent Site
              </Button>
            </a>
          </Col>
          <Col>
            <Image className="safeimg" src={safetyImage} fluid />
            <a rel="noopener noreferrer" target="_blank" href="#" download>
              <Button className="form-btn-safe safetypack-button safety-button">
                Download Safety Pack Info
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
