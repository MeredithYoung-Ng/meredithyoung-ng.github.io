import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <p>meredith young-ng</p>
        </div>
        <div className="App-header-links">
          <div className="Link-about">
            <a href="#about">about</a>
          </div>
          <div className="Link-portfolio">
            <a href="#portfolio">portfolio</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
