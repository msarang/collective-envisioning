import React from 'react';
import { Image } from 'react-bootstrap';
import turningpoint from "./turningpoint.png";
import {Card, ListGroup, CardGroup} from "react-bootstrap";
import './Section-One.css';

export const SectionOne = () => (
  <React.Fragment>
      <h2 className="heading-two">Will 2021 be a turning point in lunar exploration?</h2>
        <div className="pie-chart-container ">
            <Image src={turningpoint} className="pie-chart" fluid />
        </div>

      <CardGroup>

        <Card style={{ width: 'auto' }}>
          <Card.Header>YES</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> "The first commercial lunar landers should arrive in 2021. That's a breakthrough."</ListGroup.Item>
            <ListGroup.Item>"Every year can and should be a turning point. In 2021 specifically: 1) HLS award(s) will be made, 2) NASA's direction for the next 4-12 years will clarify."</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: 'auto'}}>
          <Card.Header>NO</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> "There are many on-going efforts for lunar exploration, both robotically and manned.   These efforts in the US have been underway for several years, including the CLPS and Artemis program.  2021 will just be another year on the journey as NASA and other countries seek to move forward in this arena.  Even though it's not a turning point, we are heading towards more robotic and manned missions to the moon, and eventually a more permanent presence there."</ListGroup.Item>
            <ListGroup.Item>"Rather than 2021, I think 2024 or whenever the next human landing on the lunar surface is accomplished will be a turning point."</ListGroup.Item>
            <ListGroup.Item>"At best we may see some small CLPS landers in 2021, but I’m skeptical. Even if they do happen, it’s not clear how this is a turning point. To me a turning point is when there's an economic incentive for commercial companies to go to the Moon, at scale and continuously, where the funding capital is not from governments."</ListGroup.Item>
            <ListGroup.Item>"I think a turning point is coming soon, but I think it will hit a little later than 2021. Between the various CLPS providers, the Chang'e sample return missions, and some of the surviving Google Lunar XPRIZE competitors, there are a number of really exciting missions coming down the pipeline that have the potential to serve as that tipping point."</ListGroup.Item>
          </ListGroup>
        </Card>

      </CardGroup>
    </React.Fragment>
)

