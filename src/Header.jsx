import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <Link to="/">
            <button type="button" className="App-header-name">
              <span id="name">meredith young-ng</span>
            </button>
          </Link>
        </div>
        <div className="App-header-pages">
          <NavLink exact={true} activeClassName="headerActive" to="/">
            <button type="button">
              <span id="buttonLink">about</span>
            </button>
          </NavLink>
          <NavLink activeClassName="headerActive" to="/work">
            <button type="button">
              <span id="buttonLink">work</span>
            </button>
          </NavLink>
          <NavLink activeClassName="headerActive" to="/music">
            <button type="button">
              <span id="buttonLink">music</span>
            </button>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
