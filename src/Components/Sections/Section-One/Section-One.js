import React from 'react';
import { Image } from 'react-bootstrap';
import turningpoint from "./turningpoint.png";
import {Card, ListGroup, CardGroup} from "react-bootstrap";
import './Section-One.css';
import { Example } from './Modal';

export const SectionOne = () => (
  <div className="section-one-block">
    
      <div className="responses">
        <Card style={{ width: '100%' }}>
          <Card.Header>YES</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> "The first <Example mission="commercial lunar landers " url=""></Example>should arrive in 2021. That's a breakthrough."</ListGroup.Item>
            <ListGroup.Item>"Every year can and should be a turning point. In 2021 specifically: 1) <Example mission="HLS award(s)" url=""></Example> will be made, 2) NASA's direction for the next 4-12 years will clarify."</ListGroup.Item>
            <ListGroup.Item>"<Example mission="NASA's CLPS" url=""></Example> program, and <Example mission="Artemis" url=""></Example> to a larger extent, has been an enabler for a renewed interest in the Moon. With an upcoming election, it is important for those of us who support lunar exploration to be clear about the benefits of going to the Moon. We can learn there and build an economic and scientific engine that can create a global good. We can also use it as a stepping off point to go on to Mars."</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: '100%'}}>
          <Card.Header>NO</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> "There are many on-going efforts for lunar exploration, both robotically and manned.  These efforts in the US have been underway for several years, including the <Example mission="CLPS and Artemis program" url=""></Example>.  2021 will just be another year on the journey as NASA and other countries seek to move forward in this arena.  Even though it's not a turning point, we are heading towards more robotic and manned missions to the moon, and eventually a more permanent presence there."</ListGroup.Item>
            <ListGroup.Item>"Rather than 2021, I think 2024 or whenever the next <Example mission="human landing on the lunar surface" url=""></Example> is accomplished will be a turning point."</ListGroup.Item>
            <ListGroup.Item>"At best we may see some small <Example mission="CLPS landers" url=""></Example> in 2021, but I’m skeptical. Even if they do happen, it’s not clear how this is a turning point. To me a turning point is when there's an <Example mission="economic incentive for commercial companies" url=""></Example> to go to the Moon, at scale and continuously, where the funding capital is not from governments."</ListGroup.Item>
            <ListGroup.Item>"I think a turning point is coming soon, but I think it will hit a little later than 2021. Between the various <Example mission ="CLPS" url=""></Example> providers, the <Example mission="Chang'e sample return" url=""></Example> missions, and some of the surviving Google Lunar XPRIZE competitors, there are a number of really exciting missions coming down the pipeline that have the potential to serve as that tipping point."</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: '100%'}}>
          <Card.Header>OTHER</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><b>NOT SURE</b> “The funding (VC and govt) environment is unclear given all the pandemic response. Will NASA actually be able to do what they have proposed?”</ListGroup.Item>
            <ListGroup.Item><b>POTENTIALLY</b> “[If we see] somewhat regular <Example mission="transportation" url=""></Example> to and from cislunar space and Moon surface.”</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div className="chart-and-title">
          <div className="stick">
          <h2 className="heading-two">Will 2021 be a turning point in lunar exploration?</h2>
            <div className="pie-chart-container ">
                <Image src={turningpoint} className="pie-chart" fluid />
          </div>
          </div>
      </div>
    </div>
)

