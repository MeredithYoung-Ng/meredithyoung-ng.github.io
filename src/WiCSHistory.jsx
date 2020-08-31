import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import wicshistorycomputer from './imgs/wicshistory-computer.png';
import wicshistorynotebook1 from './imgs/wicshistory-notebook1.jpeg';
import wicshistorynotebook2 from './imgs/wicshistory-notebook2.jpeg';
import wicshistorynotebook3 from './imgs/wicshistory-notebook3.jpeg';
import wicshistoryadobexd from './imgs/wicshistory-adobexd.jpg';
import wicshistorywebsite from './imgs/wicshistory-website.jpg';

class WiCSHistory extends Component {
  render() {
    return (
      <div className="App-body-project">
        <h2>History of Women in Computer Science</h2>
        <a href="https://wics-history.herokuapp.com" target="_blank"
        rel="noopener noreferrer" className="App-body-wics">
          https://wics-history.herokuapp.com
        </a>
        <h3>Nov. 2019 — Present</h3>
        <img src={wicshistorycomputer} alt="WiCS History Website"
        className="App-body-project-main-pic"/>
        <h4 className="App-body-wics-section">Introduction — Bridging the
        Gender Gap in Computer Science</h4>
        <p>Studies show that girls lose interest in STEM by middle school. By
          college, women only earn 18% of all computer science degrees, and
          &#60; 20&#37; of people in tech are women. While women have
          continuously made (and continue to make) influential contributions to
          all fields of computer science, the gender gap in computer science
          persists. My webpage aims to provide an interactive experience for
          people to learn more about the depth of the history of women in
          computer science, and to provide resources for people to start
          learning how to code. It only takes one person—YOU—to start helping
          me bridge the gender gap in computer science.
        </p>
        <h4 className="App-body-wics-section">Overview</h4>
        <p>My design process for this project was as follows:<br />
          1.	Research<br />
          2.	Low-Fidelity Prototypes (Sketches) & User Testing <br />
          3.	High-Fidelity Prototypes: Adobe XD & Website (React)<br />
          4.	Reflection & Future Work<br /><br />
          Throughout all of my diversity in engineering outreach, I’ve always
          wondered how I could help bridge the gender gap on a more global
          scale. As I progressed in my engineering career, I’ve always been
          presented with the same key historical women in computing (e.g.,
          Grace Hopper)—I wanted to bring more attention to some of the
          lesser-known women in computing, and highlight their achievements.
          This manifested as my Bridging the Gender Gap in Computer Science
          website. Along the way, I learned Adobe XD, React, and how to host
          an app on Heroku.
        </p>
        <h4 className="App-body-wics-section">Research</h4>
        <p>Before I began prototyping, I decided to see how other webpages
          represent the history of women in computer science and engineering.
          Wikipedia has its&nbsp;
          <a href="https://en.wikipedia.org/wiki/Women_in_computing"
          target="_blank" rel="noopener noreferrer" className="link-wics">
            Women in computing
          </a> page and a comprehensive&nbsp;
          <a href="https://en.wikipedia.org/wiki/Timeline_of_women_in_computing"
          target="_blank" rel="noopener noreferrer" className="link-wics">
            timeline of women in computing
          </a>
          ; however, these lists don’t have pictures humanizing the women in
          addition to their academic achievements. The significance of these
          academic achievements is also not clear to someone without a
          background in computing. Other websites such as&nbsp;
          <a href="https://www.engineergirl.org/123633/Trailblazers"
          target="_blank" rel="noopener noreferrer" className="link-wics">
            EngineerGirl
          </a> and&nbsp;
          <a href="http://wit.library.cornell.edu"
          target="_blank" rel="noopener noreferrer" className="link-wics">
            League of Coders
          </a> primarily focus on women engineers in the US; further
          biographical information such as their field and lifetime aren’t
          listed next to their names and pictures.
        </p>
        <h4 className="App-body-wics-section">Low-Fidelity Prototypes & User
        Testing</h4>
        <p>Before I began prototyping, I decided to see how other webpages
          represent the history of women in computer science and engineering.
          Wikipedia has its Women in computing page and a comprehensive timeline
          of women in computing; however, these lists don’t have pictures
          humanizing the women in addition to their academic achievements. The
          significance of these academic achievements is also not clear to
          someone without a background in computing. Other websites such as
          EngineerGirl and League of Coders primarily focus on women engineers
          in the US; further biographical information such as their field and
          lifetime aren’t listed next to their names and pictures. <br /><br />
          Based on my research analysis, I started sketching prototypes, as
          shown below.
        </p>
        <div className="App-body-project-notebook">
          <img src={wicshistorynotebook1} alt="Sketches"/>
          <img src={wicshistorynotebook2} alt="Sketches"/>
        </div>
        <p>Before sketching my next prototype, I conducted some simple Wizard
          of Oz testing using convenience sampling.
        </p>
        <div className="App-body-project-notebook">
          <img src={wicshistorynotebook3} alt="Low-Fidelity Prototype"/>
        </div>
        <h4 className="App-body-wics-section">High-Fidelity Prototypes</h4>
        <p>After sketching my webpage design, I decided to make a high-fidelity
          prototype in AdobeXD as shown below. This enabled me to better
          visualize my webpage before I began coding.
        </p>
        <div className="App-body-project-webpage">
          <img src={wicshistoryadobexd} alt="High-Fidelity Prototype"/>
        </div>
        <p>I coded my final prototype using React. My webpage has a cover image
          that attracts attention to the statistics regarding this issue, and
          cuts off after the “History” header to indicate that there is more
          information below. The navbar also provides affordances to show other
          sections of the page (History and Learn). Arrows indicate that the
          filtering dropdown buttons (Field and Country) expand to show more
          options. In addition, the dropdown buttons render whatever Field and
          Country is selected, once the user selects an option. I decided to use
          green and blue in my color theme, as the “calmer” colors in the red,
          green, and blue rendering trio. The blue in the color theme is used to
          accentuate potential user actions, particularly for buttons and
          keywords.<br /><br />
          Data is passed through props to <span id="codeFont">FilteredList
          </span>, <span id="codeFont">CardYou</span>, and <span id="codeFont">
          CodingExp</span>. The <span id="codeFont">FilteredList</span>
          &nbsp;component filters and sorts through the database of historical
          women computer scientists, with the <span id="codeFont">List</span>
          &nbsp;component rendering the <span id="codeFont">Card</span>&#32; of
          each woman as applicable. Filters (field and country) and sorting (by
          date of birth) can be achieved by clicking the appropriate filter
          from the dropdown and the sorting checkbox, respectively.<br /><br />
          <span id="codeFont">CardYou</span>&nbsp;uses the default “You”
          information through props default values for the user inputs
          in&nbsp;<span id="codeFont">state</span>. Clicking the “Join Us”
          button renders whatever information the user has entered in the text
          entry form (name, birth year, field, and country) on the “You” card by
          updating&nbsp;<span id="codeFont">state</span>&nbsp;and the
          “You”&nbsp;<span id="codeFont">Card</span>&nbsp;component.<br /><br />
          <span id="codeFont">CodingExp</span> uses the selected radio button
          option to recommend coding resources to the user based on their coding
          experience when the user clicks the “Let’s Get Started” button. The
          coding experience options for the radio buttons and labels are
          referenced through <span id="codeFont">this.props.choices</span>,
          and the currently selected radio button id is stored in state as&nbsp;
          <span id="codeFont">checkedRadio</span>. This is updated every time
          the user selects a different option. The resources shown (rendered)
          change each time the user clicks the “Let’s Get Started” button via
          updating the value of <span id="codeFont">resourceOption</span>&nbsp;
          in&nbsp;<span id="codeFont">state</span>.<br /><br />
          My final prototype is currently hosted on Heroku&nbsp;
          <a href="https://wics-history.herokuapp.com" target="_blank"
          rel="noopener noreferrer" className="link-wics">here</a>.
          View the code&nbsp;
          <a href="https://github.com/MeredithYoung-Ng/wics-history"
          target="_blank" rel="noopener noreferrer" className="link-wics">
          here</a> on GitHub.
        </p>
        <h4 className="App-body-wics-section">Reflection & Future Work</h4>
        <p>This project enabled me to utilize all the UI/UX design skills that
          I’ve learned in my UI/UX class, and apply them towards one of my
          personal interests (helping increase diversity in computing!).
          Currently, the webpage only supports laptop internet browsers viewed
          at full-screen. In the future, I plan on expanding the supported
          responsiveness functionality for other sized screens and devices. In
          addition, it would be nice to add some interactive mentorship feature
          to emphasize the community involvement aspect of bridging the gender
          gap in computer science.<br /><br />
          Fun Fact: At Cornell, I fell in love with algorithms after taking a
          class with Prof. Éva Tardos (one of the featured women on my webpage!)
          and Prof. Alexandra (Xanda) Schofield, two of my most inspirational
          role models.
        </p>
        <div className="App-body-project-webpage">
          <img src={wicshistorywebsite} alt="Website"/>
        </div>
        <div className="App-body-project-buttons">
          <Link to="/pvdcm">
            <button type="button">
              &#8249; Previous: PVDCM
            </button>
          </Link>
          <Link to="/work">
            <button type="button">
              Back to Portfolio
            </button>
          </Link>
          <Link to="/portalware">
            <button type="button">
              Next Up: Portalware &#8250;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WiCSHistory;
