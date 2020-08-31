import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import profile from './imgs/profile.jpg';
import resume from './resume.pdf';

class About extends Component {
  render() {
    return (
      <div className="App-body">
        <div className="App-body-bio">
          <h1>hi, i'm meredith.</h1>
          <h2>engineer • designer • writer • creator.</h2>
          <div className="App-body-bio-text">
            <p>I’m a M.S. student at Brown University, studying computer
            science. My research interests are related to engineering immersive
            user experiences at the intersection of computer graphics and HCI.
            Currently, I work on smartphone augmented reality research
            with <a href="https://jeffhuang.com/" target="_blank"
            rel="noopener noreferrer">Jeff Huang</a>. Previously, I worked on
            simulating a 3D crocheting machine and other textiles in the Cornell
            Graphics and Vision Lab with&nbsp;
            <a href="https://www.cs.cornell.edu/~srm/" target="_blank"
            rel="noopener noreferrer">Steve Marschner</a> and&nbsp;
            <a href="https://www.cs.cornell.edu/~francois/" target="_blank"
            rel="noopener noreferrer">François Guimbretière</a>.<br /><br />
            When I’m not in the lab, you can find me&nbsp;
            <NavLink to="/music">making music</NavLink>, working
            on engineering-related diversity outreach, or reading and writing
            personal essays.</p>
          </div>
          <div className="App-body-bio-buttons">
            <NavLink className="Button-work" to="/work">work</NavLink>
            <a href={resume} target="_blank" rel="noopener noreferrer"
            className="Button-resume">
              resume
            </a>
          </div>
        </div>
        <div className="App-body-pic">
          <img src={profile} alt="Profile"/>
          <div className="App-body-pic-info">
            <p><span id="App-body-status">currently</span>: brown m.s. ‘21, edison intern @ ge research</p>
            <p><span id="App-body-status">previously</span>: cornell b.s. ’19</p>
            <p><span id="App-body-status">future</span>: tbd</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
