import React, { Component } from 'react';
import Icon from './assets/img/icon.png';

class Header extends Component {
  render() {
    return (
      <div id="header" className="header">
      <div id="header-cont">
      <img id="header-icon" className="header-image invert" src={Icon} alt="Icon" />
      <div id="header-text">
      <a className="hide-link" href="#/"><h3>Super Smash Frame Data</h3></a>
      <br />
      <br />
      </div>
      </div>

      </div>
    );
  }
}

export default Header;
