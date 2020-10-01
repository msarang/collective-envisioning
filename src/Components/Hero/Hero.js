import React from 'react';
import {Image} from 'react-bootstrap';
import './Hero.css';
import logo from './LOA_orbit_logo.png';

export const Hero = () => (
    <div className="hero-background">
      <h1 className="heading-one">What's Next for Lunar Exploration?</h1>
      <div className="image-container">
        <Image src={logo} className="logo" />
      </div>
      <div className="intro-text">
      <p className="body-text-black">
        Last year, we celebrated the 50th anniversary of the Apollo Moon landings. With NASA announcing a return to the lunar surface with the Artemis program, an explosion – in recent years – of 
        missions to the Moon yielding exciting results regarding the resource potential on the surface, and more private actors reaching important technology milestones, it seems likely that the coming decade
        will bring even more activity to the lunar surface. 

        <br>
        </br>
        <br>
        </br>
        We asked experts from industry and space agencies around the world to share their take on the next year of lunar exploration.
      </p>
      </div>
    </div>
)

