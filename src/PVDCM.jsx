import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import pvdcmcomputer from './imgs/pvdcm-computer.png';
import pvdcmoriginal from './imgs/pvdcm-original.png';
import pvdcmwireframe1 from './imgs/pvdcm-wireframe1.png';
import pvdcmwireframe2 from './imgs/pvdcm-wireframe2.png';
import pvdcmwireframe3 from './imgs/pvdcm-wireframe3.png';
import pvdcmwireframe4 from './imgs/pvdcm-wireframe4.png';
import pvdcmwireframe5 from './imgs/pvdcm-wireframe5.png';
import pvdcmwireframe6 from './imgs/pvdcm-wireframe6.png';
import pvdcmwireframe7 from './imgs/pvdcm-wireframe7.png';
import pvdcmnavflowchart from './imgs/pvdcm-navflowchart.jpg';
import pvdcmmockup from './imgs/pvdcm-mockup.png';

class PVDCM extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>Providence Children's Museum Redesign</h2>
        <a href="https://meredithyoung-ng.github.io/pvd_childrens_museum_redesign"
        target="_blank" rel="noopener noreferrer" className="App-body-pvdcm">
          https://meredithyoung-ng.github.io/pvd_childrens_museum_redesign
        </a>
        <h3>Oct. 2019</h3>
        <img src={pvdcmcomputer} alt="Providence Children's Museum Website"
        className="App-body-project-main-pic"/>
        <h4 className="App-body-pvdcm-section">Introduction</h4>
        <p>Founded in the 1970’s, the&nbsp;
          <a href="https://childrenmuseum.org" target="_blank"
          rel="noopener noreferrer" className="link-pvdcm">
            Providence Children's Museum
          </a> originated in Pawtucket as the first and only children’s museum
          in Rhode Island. Since relocating to Providence in 1997, the museum
          has attracted over 2.5 million visitors through its interactive
          exhibits and hands-on learning environments. Currently, its website
          provides information about visiting, current exhibits, how to support
          the museum, and more; however, the website’s inconsistent and
          unorganized design makes it difficult to find pertinent information.
          Furthermore, the lack of responsiveness makes it difficult to use on
          other screen sizes.
        </p>
        <h4 className="App-body-pvdcm-section">Overview</h4>
        <p>1. Usability Redesign<br />
          2. Wireframes<br />
          3. Navigation Flowchart<br />
          4. Visual & Responsive Redesign<br />
          5. Responsive Homepage (HTML & CSS)<br />
          6. Reflection & Future Work<br /><br />
          I collaborated with Gabby Hoefer and Christine Lin. Our goal:
          redesign the homepage, focusing on improving its usability and
          aesthetic appearance. We worked together on the usability redesign,
          sketching & wireframes, and navigation flowchart. I then created the
          responsive homepage based on my teammates’ annotated high-fidelity
          mockups. My personal goal for this project was to learn how to
          implement responsive webpages.
        </p>
        <div className="App-body-pvdcm-original">
          <img src={pvdcmoriginal} alt="Original Providence Children's Museum
          Website"/>
          <p>Original design</p>
        </div>
        <h4 className="App-body-pvdcm-section">Usability Redesign</h4>
        <p>Currently, the original interface has many problems with
          inconsistency and disorganization that detract from the user
          experience. We organized these problems based on&nbsp;
          <a href="https://usability.gov" target="_blank"
          rel="noopener noreferrer" className="link-pvdcm">
            usability.gov
          </a>
          ’s criteria: intuitive design, ease of learning, efficiency of
          use, and memorability.
        </p>
        <div className="App-body-pvdcm-table">
          <p></p>
          <p className="mid-col-top-row">Original Interface</p>
          <p>Redesigned Interface</p>
          <p className="end-col">Intuitive Design</p>
          <ul className="mid-col">
            <li>11 item navigation bar is overly complex/hard to understand</li>
            <li>Some navigation links lead to a blank (missing/error) page</li>
            <li>It is unclear that links in navigation bar are categories and
            not actual web pages</li>
            <li>Not obvious some links in navigation bar are external and take
            users away from original site</li>
            <li>Uses flashing images as links to web pages - difficult for
            users to revisit the page as image is constantly changing</li>
          </ul>
          <ul className="end-col">
            <li>Navigation bar at top reduced to 4 main items most relevant to
            users</li>
            <li>Secondary navigation links located inside menu sidebar</li>
            <li>Removed error pages and external links from navigation bar</li>
            <li>Consolidated related information and pages to simplify overall
            navigation</li>
            <li>On hover, an underline appears to show users the navigation
            links are clickable</li>
            <li>Removed flashing images and added clear buttons so it would be
            obvious to the user what they're clicking on</li>
          </ul>
          <p className="end-col">Ease of Learning</p>
          <ul className="mid-col">
            <li>Inconsistent page layouts make  it hard for new users to
            accomplish basic tasks</li>
            <li>Small buttons are challenging to see at first glance</li>
          </ul>
          <ul className="end-col">
            <li>Uniform/consistent layout across site increases ease of use</li>
            <li>Clear buttons with large text helps new users better navigate
            site</li>
          </ul>
          <p className="end-col">Efficiency of Use</p>
          <ul className="mid-col">
            <li>Pages contain large blocks of text - users must read slowly and
            may miss important information</li>
            <li>Difficult to view and compare exhibits (each exhibit is in an
            individual link and users need to go back and forth between pages)
            </li>
            <li>Related information is located on multiple different pages</li>
          </ul>
          <ul className="end-col">
            <li>Small blocks of text deliver information quickly and
            efficiently</li>
            <li>Added pictures and brief description of each exhibit to the
            Exhibits page to increase efficiency</li>
            <li>Consolidated all related information in our redesign (e.g. new
            “Visit” page consolidates 2 original pages “Hours and Admission”
            and “Directions and Parking”)</li>
          </ul>
          <p className="end-col">Memorability</p>
          <ul className="mid-col">
            <li>Information is disorganized and scattered--even for experienced
            users, navigation is difficult due to the sheer amount of content
            under each heading</li>
            <li>Difficult to remember on which page the information you need is
            located</li>
            <li>Difficult to remember the path taken to a specific page since
            there is no feedback as to which link was clicked in the navigation
            bar</li>
          </ul>
          <ul className="end-col">
            <li>Each link in navigation bar takes users to a page they can
            navigate to, where they can find the specific destination page
            they’re searching for. This eliminates the confusion of having
            multiple dropdown options under each heading.</li>
            <li>Line appears underneath the heading each user selected, helping
            them understand what they clicked on to navigate more efficiently
            in the future</li>
          </ul>
        </div>
        <p>Then, we developed solutions to each problem for our redesigned
          interface, incorporating them into our sketches before integrating
          the sketches together into our low-fidelity wireframes in Balsamiq
          and navigation flowchart.
        </p>
        <h4 className="App-body-pvdcm-section">Wireframes</h4>
        <p>Since most pertinent information is spread across different webpages
          in the original website, we decided to condense them into the
          following categories: Homepage, Homepage with Menu Bar, Visit,
          Exhibits, About, Support, and Careers.
        </p>
        <div className="App-body-pvdcm-wireframes">
          <img src={pvdcmwireframe1} alt="Wireframe"/>
          <img src={pvdcmwireframe2} alt="Wireframe"/>
          <img src={pvdcmwireframe3} alt="Wireframe"/>
          <img src={pvdcmwireframe4} alt="Wireframe"/>
          <img src={pvdcmwireframe5} alt="Wireframe"/>
          <img src={pvdcmwireframe6} alt="Wireframe"/>
          <img src={pvdcmwireframe7} alt="Wireframe"/>
        </div>
        <h4 className="App-body-pvdcm-section">Navigation Flowchart</h4>
        <div className="App-body-pvdcm-figure">
          <img src={pvdcmnavflowchart} alt="Navigation Flowchart"/>
        </div>
        <p>Essentially, the navigation bar at the top facilitates easier
          navigation to key webpages (Visit, Exhibits, Events, and About).
          Buttons on each webpage help the user quickly find related
          information.
        </p>
        <h4 className="App-body-pvdcm-section">Visual & Responsive Redesign</h4>
        <p>Based on our wireframes, my teammates made high-fidelity mockups of
          the homepage and exhibits page using Adobe XD, making many design
          changes to improve the user experience. To improve readability, we
          used small blocks of text, bolded headings, 2 accent colors from the
          logo, a grid layout for exhibit information, and increased white
          space in the layout. We aligned images and text in a consistent
          manner to better organize page content, increasing image size to make
          the page layout more accessible. We implemented an underline in the
          navigation bar which appears on hover to indicate clickable links.
          To highlight pages with key information, we relocated the shortened
          navigation bar to the top. Important information (e.g., the museum’s
          address and hours) is now displayed in the footer.
        </p>
        <div className="App-body-pvdcm-figure">
          <img src={pvdcmmockup} alt="Annotated Homepage Mockup"/>
        </div>
        <h4 className="App-body-pvdcm-section">Responsive Homepage</h4>
        <p>View the responsive version of the homepage&nbsp;
          <a href="https://meredithyoung-ng.github.io/pvd_childrens_museum_redesign"
          target="_blank" rel="noopener noreferrer" className="link-pvdcm">
            here
          </a>! It was implemented with HTML and CSS, using Flexbox and Grid
          for the responsiveness. View the code&nbsp;
          <a href="https://github.com/MeredithYoung-Ng/pvd_childrens_museum_redesign"
          target="_blank" rel="noopener noreferrer" className="link-pvdcm">
            here
          </a> on GitHub.
        </p>
        <h4 className="App-body-pvdcm-section">Reflection & Future Work</h4>
        <p>This project helped me grow my web design and frontend engineering
          skills, as I gained experience in the entire process from building
          low-fidelity prototypes in Balsamiq to coding a responsive webpage
          with Flexbox and Grid. Currently, our webpage closely matches our
          homepage, except for the menu (an icon). In the future, we could use
          React to implement this functionality. In addition, we could make the
          homepage more consistent with the exhibits page by implementing a
          carousel in React for featured exhibits. Finally, we would implement
          the rest of the redesigned webpages.
        </p>
        <div className="App-body-project-buttons">
          <Link to="/discobot">
            <button type="button">
              &#8249; Previous: Disco Bot
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/wicshistory">
            <button type="button">
              Next Up: WiCS History &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PVDCM;
