import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import portalware from './imgs/portalware.png';
import crochetmatic from './imgs/crochetmatic.jpg';
import surfacebrush from './imgs/surfacebrush.gif';
import pathtracer from './imgs/pathtracer.jpg';
import tiletunes from './imgs/tiletunes.png';
import discobot from './imgs/discobot.png';
import pvdcm from './imgs/pvdcm.png';
import wicshistory from './imgs/wicshistory.png';

class Portfolio extends Component {
  render() {
    return(
      <div className="App-body-portfolio">
        <h2>research</h2>
        <div className="App-body-portfolio-items">
          <div>
            <NavLink to="/portalware">
              <input type="image" src={portalware} alt="Portalware"/>
              <h3>Portalware</h3>
            </NavLink>
            <p>HCI, Graphics, UI/UX</p>
          </div>
          <div>
            <NavLink to="/crochetmatic">
              <input type="image" src={crochetmatic} alt="CrochetMatic"/>
              <h3>CrochetMatic</h3>
            </NavLink>
            <p>Graphics, HCI</p>
          </div>
        </div>
        <h2>computer graphics</h2>
        <div className="App-body-portfolio-items">
          <div>
            <NavLink to="/surfacebrush">
              <input type="image" src={surfacebrush} alt="SurfaceBrush"/>
              <h3>SurfaceBrush</h3>
            </NavLink>
            <p>Graphics</p>
          </div>
          <div>
            <NavLink to="/pathtracer">
              <input type="image" src={pathtracer} alt="Path Tracer"/>
              <h3>Path Tracer</h3>
            </NavLink>
            <p>Graphics</p>
          </div>
        </div>
        <h2>engineering immersive user experiences</h2>
        <div className="App-body-portfolio-items">
          <div>
            <NavLink to="/tiletunes">
              <input type="image" src={tiletunes} alt="Tile Tunes"/>
              <h3>Tile Tunes</h3>
            </NavLink>
            <p>HCI, UI/UX, Music</p>
          </div>
          <div>
            <NavLink to="/discobot">
              <input type="image" src={discobot} alt="Disco Bot"/>
              <h3>Disco Bot</h3>
            </NavLink>
            <p>HRI, UI/UX, Music</p>
          </div>
        </div>
        <h2>my design process: ideate, research, iterate</h2>
        <div className="App-body-portfolio-items">
          <div>
            <NavLink to="/pvdcm">
              <input type="image" src={pvdcm} alt="Providence Children's Museum
              Redesign"/>
              <h3>Providence Children's Museum Redesign</h3>
            </NavLink>
            <p>UI/UX</p>
          </div>
          <div>
            <NavLink to="/wicshistory">
              <input type="image" src={wicshistory} alt="History of Women in
              Computer Science"/>
              <h3>History of Women in Computer Science</h3>
            </NavLink>
            <p>UI/UX, Outreach</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
