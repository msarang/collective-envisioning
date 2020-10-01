import React from 'react';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { SectionOne } from './Components/Sections/Section-One/Section-One';
import { SectionTwo } from './Components/Sections/Section-Two/Section-Two';
import { SectionThree } from './Components/Sections/Section-Three/Section-Three';
import { SectionFour } from './Components/Sections/Section-Four/Section-Four';
import { SectionFive } from './Components/Sections/Section-Five/Section-Five';


export default function Sections() {
  return (
    <Container fluid className="background">

        <Navbar bg="light">
          <Navbar.Brand href="https://loa.mit.edu">Lunar Open Architecture</Navbar.Brand>
        </Navbar>
      
      <Row className="hero">
        <Hero />
      </Row>

      <Row className="second-background">
        <Col className="section">
          <SectionOne />
        </Col>
        <Col className="section">
          <SectionTwo />
        </Col>
        <Col className="section">
        <h2 className="heading-two">Mission Architecture Prioritization</h2>
          <SectionThree />
        </Col>
        <Col className="section">
          <SectionFour />
        </Col>
        <Col className="section">
          <SectionFive />
        </Col>

      </Row>
    </Container>
  );
}