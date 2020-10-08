import React from 'react';
import {Image} from 'react-bootstrap';
import './Hero.css';
import logo from './LOA_orbit_logo.png';
import Martin from './elvis-lg.jpg'
import Larry from './larry.jpg'
import Rob from './rob.jpeg'
import Daniel from './download (1).jpeg'

export const Hero = () => (
  <div className="hero">
    <div className="hero-section-one">
          <h1 className="heading-one">What's Next for Lunar Exploration?</h1>    
          <div className="image-container">
            <Image src={logo} className="logo" />
          </div>
      <p className="body-text-black">By <b>MIT SPACE EXPLORATION INITIATIVE</b> | 10/06/20 05:00 PM EDT</p>
    </div>

    <div className="hero-section-two">
    <h1 className="heading-one">The Respondents</h1>   
      <p className="body-text-black">We asked 13 experts in the space industry for their take on the next year in lunar exploration.</p>

      <div className="respondents">
        <div className="respondent-plus-caption">
          <Image src={Martin} className="respondent-photo" roundedCircle/>
          <p className="body-text-black"><b>MARTIN ELVIS</b><br></br>Center for Astrophysics | Harvard & Smithsonian</p>
        </div>

        <div className="respondent-plus-caption">
          <Image src={Larry} className="respondent-photo" roundedCircle/>
          <p className="body-text-black"><b>LARRY JAMES</b><br></br>Lt Gen, USAF (Ref), Deputy Director, NASA JPL</p>
        </div>

        <div className="respondent-plus-caption">
          <Image src={Rob} className="respondent-photo" roundedCircle/>
          <p className="body-text-black"><b>ROB MEYERSON</b><br></br>Delalune Space</p>
        </div>


        <div className="respondent-plus-caption">
          <Image src={Daniel} className="respondent-photo" roundedCircle/>
          <p className="body-text-black"><b>DANIEL DUMBACHER</b><br></br>AIAA</p>
        </div>

      </div>

      <p className="body-text-black">
      Last year, we celebrated the 50th anniversary of the Apollo 11 Moon landing. NASA has announced a return to the lunar surface with the Artemis program, and we have witnessed a recent uptick in missions to the Moon--many yielding exciting results regarding the resource potential on the surface. With more and more private actors reaching important technology milestones, it seems likely that the coming decade will bring even more activity to the lunar surface.
      </p>

    </div>
  </div>
)

