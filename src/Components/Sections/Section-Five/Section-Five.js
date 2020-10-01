import React from 'react';
import {Card, ListGroup, CardGroup} from "react-bootstrap";

export const SectionFive = () => (
  <React.Fragment>
      <h2 className="heading-two">What should the ideal space program’s priority be in the next five years, if we hope to enable sustainable lunar exploration?</h2>
      <CardGroup style={{width:'60%'}}>

        <Card style={{ width: '100%' }}>
          <ListGroup variant="flush">
            <ListGroup.Item> "Lower cost launch capability to lunar space; advanced robotics to operate on the lunar surface; manufacturing capabilities and habitat capabilities to allow longer term residence on the moon. Sustainable presence."</ListGroup.Item>
            <ListGroup.Item>"Artemis 1 and 2 missions, along with engineering design of lunar surface systems."</ListGroup.Item>
            <ListGroup.Item>"In terms of robotic exploration at least, NASA and the US are on exactly the right track for sustainable lunar exploration."</ListGroup.Item>
            <ListGroup.Item>"Get HLS on stable footing by extending the date to 2028 and eliminate SpaceX from the competition as not a serious competitor to Dynetics or Blue. Figure out a way to launch Orion other than SLS, as SLS is not sustainable, or figure out another way to get astronauts beyond LEO. Initiate a program for a LEO habitat so they can be a smooth transition when ISS reaches end-of-life. Formally abandon any near-term work on or humans-to-Mars ambitions as there's no foreseeable situation where NASA has the funding for this and Americans don't care. Continue our regular cadence of robotic Mars missions. Double the number of Discovery-class missions. Create a program of record for an artificial gravity habitat."</ListGroup.Item>
            <ListGroup.Item>"Creating both a sustained human presence on the Moon and a vibrant LEO economy. The government can support by buying mission services - multiple missions per year, both crew and cargo - for the next decade."</ListGroup.Item>
            <ListGroup.Item>"More involvement of the commercial sector on lunar missions, both robotic and human."</ListGroup.Item>      
            <ListGroup.Item>"Energy production (2 megawatt class for extraction), infrastructure (transportation, landing pad on the Moon, fully autonomous logistics cache at Gateway), and international partnerships, and getting as much hardware on the surface of the Moon as we can prior to 2024 so the program is not canceled like Apollo"</ListGroup.Item> 
            <ListGroup.Item>"Closing the business case for the sale of lunar water. Who will be the customer?"</ListGroup.Item>   
            <ListGroup.Item>"Ideal program should be about LEO, not the Moon. However... the ideal lunar program would focus immediately on establishing a base."</ListGroup.Item>
          </ListGroup>
        </Card>

      </CardGroup>
    </React.Fragment>
)

