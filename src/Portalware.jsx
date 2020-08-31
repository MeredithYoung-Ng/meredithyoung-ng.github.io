import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import portalware from './imgs/portalware-full.jpg';
import systemdiagram from './imgs/portalware-system.png';
import extendedview from './imgs/portalware-view.png';
import wearable from './imgs/portalware-wearable.png';
import components from './imgs/portalware-components.png';

class Portalware extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>Portalware</h2>
        <h3>Aug. 2019 – Present</h3>
        <input type="image" src={portalware} alt="Portalware"/>
        <h4>Introduction</h4>
        <p>With the rising popularity of smartphone AR applications such as
          Pok&eacute;mon Go, 3D sketching in AR has emerged as a new way to
          visually annotate our current environment. Free-hand manipulation
          offers a way to more ergonomically generate 3D inputs compared to 2D
          swiping on a smartphone screen; however, smartphone AR naturally has
          a restricted interaction region due to the smartphone's limited view.
          <br /><br />
          We present Portalware, a smartphone-wearable dual-display system for
          freehand 3D mid-air sketching in AR. Our wearable enables the user to
          expand the usable interaction region via a wearable display to render
          AR objects outside the smartphone's view. Portalware can be used in
          two different interaction modes: smartphone-wearable mode, in which
          the smartphone and wearable work in tandem to render sketched AR
          objects, and pendant mode, in which the smartphone is worn like a
          pendant with the wearable acting as the primary AR viewing display.
        </p>
        <h4>Overview</h4>
        <p>1. Literature Review<br />
          2. System Prototype<br />
          3. Autobiographical Design<br /><br />
          This project is done in collaboration with Jing Qian, Angel Cheung,
          Xiangyu Li, Ian Gonsher, Tongyu Zhou, and Jeff Huang. I am
          primarily responsible for the literature review, hardware prototyping
          of the wearable, and developing the autobiographical design process.
          My own personal goals for Portalware are to gain experience working
          on user experience-focused combined hardware and software (graphics)
          projects, and to learn how to become an effective HCI researcher.
          <br /><br />
          View our extended abstract at CHI 2020&nbsp;
          <a href="https://dl.acm.org/doi/abs/10.1145/3334480.3383079"
          target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
        <h4>Literature Review</h4>
        <p>I began by conducting an extensive literature review of 3D sketching
          in VR and AR, as well as on existing solutions to limited view ranges.
          I noticed that the interaction region for existing freehand smartphone
          AR systems was quite limited due to the inability to see AR objects
          outside the smartphone's view. We then conceptualized the following
          smartphone-wearable system design, which utilizes a wearable display
          to render AR objects and interact with them outside the smartphone's
          view:
        </p>
        <input type="image" src={extendedview}
        alt="Expanding Smartphone AR Interaction Region"/>
        <h4>System Prototype</h4>
        <p>We expanded upon Portal-ble, an open-source smartphone AR system
          with free-hand manipulation, through the addition of our hand-mounted
          wearable. We use a dual fisheye-camera compatible with the Leap Motion
          API for hand tracking, which communicates with the smartphone via a
          server. The smartphone then determines what AR contents are near the
          hand with the wearable, sending them to a Raspberry Pi 4 over
          WebSockets, as shown in the system diagram below. The Pi then renders
          the information to the SSD1351 OLED display in real-time at 60 FPS via
          hardware SPI and the GPU using
          the&nbsp;<a href="https://github.com/juj/fbcp-ili9341" target="_blank"
          rel="noopener noreferrer">fbcp-ili9341 library</a>.
        </p>
        <input type="image" src={systemdiagram} alt="Portalware System Diagram"/>
        <p>To create a more ergonomic user experience, we attach the Pi to
          the wearable Portal-ble system and attach velcro to the SSD1351 so
          that it can be mounted to the hand in a variety of configurations
          (e.g., on the wrist like a watch, on the back of the palm, or on
          the index finger like a ring). With AR, we can leverage interactions
          with nearby physical objects in one's enviornment. Therefore, we
          decided to use a pointing hand gesture with the index finger for
          sketching, as it most closely mirrors tracing physical objects with a
          hand.
        </p>
        <div className="App-body-portalware-imgs">
          <input type="image" src={wearable} alt="Portalware Wearable"/>
          <input type="image" src={components} alt="Portalware System Components"/>
        </div>
        <h4>Autobiographical Design</h4>
        <p>Since every artist has their own inclinations and affinities for
          different mediums, we decided to conduct a study with autobiographical
          design to evaluate the Portalware system. In doing so, we had 3 of
          our authors act as artists and our target long-term usage users, so
          that we could rapidly iterate upon our system and personalize it for
          each of them. We structured each studio evaluation session such that
          there were tasks to elicit more user feedback about our system
          challenges, such as depth perception, as well as time for open-ended
          sketching.
        </p>
        <h4>What's next?</h4>
        <p>Portalware is a work in progress! Contact me for the latest updates
          and results.
        </p>
        <div className="App-body-project-buttons">
          <Link to="/wicshistory">
            <button type="button">
              &#8249; Previous: WiCS History
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/crochetmatic">
            <button type="button">
              Next Up: CrochetMatic &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Portalware;
