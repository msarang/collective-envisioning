import React from 'react';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import './App.css';
import { Hero } from './Components/Hero/Hero';
import { SectionOne } from './Components/Sections/Section-One/Section-One';
import { SectionTwo } from './Components/Sections/Section-Two/Section-Two';
import { SectionThree } from './Components/Sections/Section-Three/Section-Three';
import { SectionFour } from './Components/Sections/Section-Four/Section-Four';

export default function Sections() {
  return (
    <Container fluid className="background">

        <Navbar bg="light">
          <Navbar.Brand href="https://loa.mit.edu">Lunar Open Architecture</Navbar.Brand>
        </Navbar>
      
      <Row>
        <Hero />
      </Row>

      <Row>
        <SectionOne />
      </Row>

      <Row> 
        <SectionTwo />
      </Row>

      <Row>       
        <SectionThree />
      </Row>

      <Row>
        <SectionFour/>
      </Row>
    </Container>
  );
}