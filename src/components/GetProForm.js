import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Image,
  Card,
  Modal,
} from 'react-bootstrap';
import getProgasImg from '../images/get.png';
import Bike from '../images/bike1.png';
import regions from '../constants/regions';

const endpoints = {
  contact: '/.netlify/functions/sendSms',
};

const axios = require('axios');

function GetProgasModal(props) {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    location: '',
    area: '',
    cylinder: '',
  });
  const [regionData, setRegionData] = useState({
    dataValue: 'nairobi',
  });

  const handleAll = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    let { phone } = formState;
    let data = { phone };
    axios
      .post(endpoints.contact, JSON.stringify(data))
      .then((response) => {
        if (response.status !== 200) {
          handleError();
        } else {
          handleSuccess();
          return navigate('/progasthankyou');
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSuccess = () => {
    setFormState({
      name: '',
      phone: '',
      location: '',
      area: '',
      loading: false,
      error: false,
    });
  };

  const handleError = (msg) => {
    setFormState({
      loading: false,
      error: true,
      msg,
    });
  };

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onChangeRegionData = (e) => {
    setRegionData({ ...regionData, [e.target.name]: e.target.value });
  };

  const { dataValue } = regionData;
  const dataOptions = regions[dataValue];

  return (
    <Modal
      {...props}
      size='xl'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title className='model-heading'>Become a Pro</Modal.Title>
      </Modal.Header>
      <Modal.Body className='show-grid'>
        <Container className='get-form'>
          <Row className='section-heading'>
            <Col>
              <h5>
                To get ProGas, kindly enter your details below. We will reach
                out shortly to connect you to one of our ProShops.
              </h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form
                name='GetProGas'
                method='POST'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                validated={validated}
                onSubmit={handleAll}>
                <input type='hidden' name='form-name' value='GetProGas' />
                <div hidden>
                  <Form.Label>
                    Don't Fill this input: <input name='bot-field' />
                  </Form.Label>
                </div>
                <Form.Row className='label-text'>
                  <Col>
                    <Form.Label className='label-name'>Full Name</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='text'
                      name='name'
                      onChange={onChange}
                      pattern='^[a-zA-Z ]*$'
                      placeholder='Full Name'
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add a name.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className='label-name'>Phone Number</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='tel'
                      name='phone'
                      pattern='^\d{10}$'
                      onChange={onChange}
                      placeholder='Enter Phone 07xxxx'
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please enter a valid phone number.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row className='label-text'>
                  <Col>
                    <Form.Label className='label-name'>Location</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='text'
                      name='dataValue'
                      onChange={onChangeRegionData}
                      pattern='^[a-zA-Z ]*$'
                      required
                      as='select'>
                      <option value='nairobi'>Nairobi</option>
                      <option value='central'>Central</option>
                      <option value='western'>Western</option>
                      <option value='nakuru'>Nakuru/Naivasha</option>
                      <option value='southrift'>South Rift</option>
                      <option value='northrift'>North Rift</option>
                      <option value='eastern'>Eastern</option>
                      <option value='other'>Other</option>
                    </Form.Control>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add a location
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className='label-name'>Area</Form.Label>
                    <Form.Control
                      className='form-input'
                      type='text'
                      required
                      as='select'>
                      {dataOptions.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.text}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                      Please add your area
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row className='label-text'>
                  <Col></Col>
                </Form.Row>
                <Button className='form-btn' type='submit'>
                  Request a Callback
                </Button>
              </Form>
            </Col>
            <Col className='bike'>
              <Image src={Bike} fluid />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function GetProForm() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row>
      <Col>
        <Card
          className='text-center h-100 card-color'
          onClick={() => setModalShow(true)}>
          <Card.Body>
            <Image className='progaimg' src={getProgasImg} fluid />
            <br />

            <Button className='pro-btn'>Get ProGas</Button>
          </Card.Body>
        </Card>
        <GetProgasModal show={modalShow} onHide={() => setModalShow(false)} />
      </Col>
    </Row>
  );
}
