import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrightnessAltHighFill } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-5">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <h1>The Great Outdoors</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad et expedita illo ipsa qui, tempore tenetur? Accusantium aperiam atque dolorem fugiat quae quam sapiente! Aliquam dignissimos eligendi</h5>
        <BrightnessAltHighFill size={100} />
      </Col>
      <Col xs={4}>
        <h1>The Great Outdoors</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad et expedita illo ipsa qui, tempore tenetur? Accusantium aperiam atque dolorem fugiat quae quam sapiente! Aliquam dignissimos eligendi</h5>
        <BrightnessAltHighFill size={100} />
      </Col>
      <Col xs={4}>
        <h1>The Great Outdoors</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad et expedita illo ipsa qui, tempore tenetur? Accusantium aperiam atque dolorem fugiat quae quam sapiente! Aliquam dignissimos eligendi</h5>
        <BrightnessAltHighFill size={100} />
      </Col>

    </Row>
  </Container>
);

export default Landing;
