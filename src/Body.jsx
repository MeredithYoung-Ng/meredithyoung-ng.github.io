import React, { Component } from 'react';
import profile from './imgs/profile.jpg';
import tiletunes from './imgs/tiletunes.png';
import discobot from './imgs/discobot.png';
import pvdcm from './imgs/pvdcm.png';
import wicshistory from './imgs/wicshistory.png';
import resume from './resume.pdf';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page[0].index
    }
  }

  updateAboutPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[0].index
    });
  }

  updatePortfolioPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[1].index
    });
  }

  updateTileTunesPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[2].index
    });
  }

  updateDiscoBotPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[3].index
    });
  }

  updatePVDCMPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[4].index
    });
  }

  updateWiCSHistoryPage = event => {
    event.preventDefault();

    this.setState({
      page: this.props.page[5].index
    });
  }

  renderHeader() {
    return(
      <header className="App-header">
        <div>
          <button type="button" onClick={this.updateAboutPage}
          className="App-header-name">
            meredith young-ng
          </button>
        </div>
        <div className="App-header-pages">
          <button type="button" onClick={this.updateAboutPage}>
            <span id="headerActive">about</span>
          </button>
          <button type="button" onClick={this.updatePortfolioPage}>
            <span id="headerActive">work</span>
          </button>
        </div>
      </header>
    );
  }

  renderAbout() {
    return(
      <div className="App-body">
        <div className="App-body-bio">
          <h1>hi, i'm meredith.</h1>
          <h2>engineer • designer • writer • creator.</h2>
          <div className="App-body-bio-text">
            <p>I’m a M.S. student at Brown University, studying computer
            science. Currently, I work on smartphone augmented reality research
            with Jeff Huang. Previously, I worked on simulating a 3D crocheting
            machine and other textiles in the Cornell Graphics and Vision Lab
            with Steve Marschner and François Guimbretière. I’m excited by
            interdisciplinary research, particularly at the intersection of
            computer graphics and HCI.</p>
            <p className="App-body-bio-hobbies">When I’m not in the lab,
            you can find me practicing violin in Steinert, working on
            engineering-related diversity outreach, or reading and writing
            personal essays.</p>
          </div>
          <div className="App-body-bio-buttons">
            <a className="Button-work" href="/#"
            onClick={this.updatePortfolioPage}>work</a>
            <a href={resume} target="_blank" rel="noopener noreferrer"
            className="Button-work">
              resume
            </a>
          </div>
        </div>
        <div className="App-body-pic">
          <img src={profile} alt="Profile"/>
          <div className="App-body-pic-info">
            <p><span id="App-body-status">currently</span>: brown m.s. ‘21</p>
            <p><span id="App-body-status">previously</span>: cornell b.s. ’19</p>
            <p><span id="App-body-status">future</span>: research intern @ ge
            global research, summer '20</p>
          </div>
        </div>
      </div>
    );
  }

  renderTileTunes() {
    return(
      <div className="App-body">
        <h2>Tile Tunes</h2>
      </div>
    );
  }

  renderDiscoBot() {
    return(
      <div className="App-body">
        <h2>Disco Bot</h2>
      </div>
    );
  }

  renderPVDCM() {
    return(
      <div className="App-body">
        <h2>Providence Children's Museum Redesign</h2>
      </div>
    );
  }

  renderWiCSHistory() {
    return(
      <div className="App-body">
        <h2>WiCS History Website</h2>
      </div>
    );
  }

  renderPortfolio() {
    return(
      <div className="App-body-portfolio">
        <h2>my design philosophy: ideate, research, <i>iterate!</i></h2>
        <div className="App-body-portfolio-items">
          <div>
            <input type="image" src={tiletunes} alt="Tile Tunes"
            onClick={this.updateTileTunesPage}/>
            <h3>Tile Tunes</h3>
            <p>HCI, UI/UX, Music</p>
          </div>
          <div>
            <input type="image" src={discobot} alt="Disco Bot"
            onClick={this.updateDiscoBotPage}/>
            <h3>Disco Bot</h3>
            <p>HRI, UI/UX, Music</p>
          </div>
          <div>
            <input type="image" src={pvdcm} alt="Providence Children's Museum
            Redesign" onClick={this.updatePVDCMPage}/>
            <h3>Providence Children's Museum Redesign</h3>
            <p>UI/UX</p>
          </div>
          <div>
            <input type="image" src={wicshistory} alt="WiCS History"
            onClick={this.updateWiCSHistoryPage}/>
            <h3>WiCS History</h3>
            <p>UI/UX, Outreach</p>
          </div>
        </div>
      </div>
    );
  }

  renderPageBody() {
    if (this.state.page === 0) {
      return(
        <div>{this.renderAbout()}</div>
      );
    } else if (this.state.page === 1) {
      return(
        <div>{this.renderPortfolio()}</div>
      );
    } else if (this.state.page === 2) {
      return(
        <div>{this.renderTileTunes()}</div>
      );
    } else if (this.state.page === 3) {
      return(
        <div>{this.renderDiscoBot()}</div>
      );
    } else if (this.state.page === 4) {
      return(
        <div>{this.renderPVDCM()}</div>
      );
    } else if (this.state.page === 5) {
      return(
        <div>{this.renderWiCSHistory()}</div>
      );
    } else {
      return(
        <div className="App-body">
          <p>Under construction...</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderPageBody()}
      </div>
    );
  }
}

export default Body;
