import React, { Component } from 'react';
import './assets/css/styles.css';
import Icon from './assets/img/icon.png';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img className="header-image" src={Icon} alt="Icon" />
				<div className="header-text">
					<a className="hide-link" href="#/">
						<h3>Super Smash Frame Data</h3>
					</a>
					<br />
					<br />
				</div>
			</div>
		);
	}
}

export default Header;
