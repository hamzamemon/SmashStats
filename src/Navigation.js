import React, { Component } from 'react';

class NavigationHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.Link64 = '#/Smash64';
		this.LinkMelee = '#/Melee';
		this.LinkBrawl = '#/Brawl';
		this.LinkSmash4 = '#/Smash4';
		this.LinkUltimate = '#/Ultimate';
	}

	render() {
		return (
			<div className="navigation-header">
				<span className="navigation-link">
					<a href={this.LinkMelee} className="hide-link">Home</a>
				</span>

				<span className="navigation-link">
					<a href={this.Link64} className="hide-link">Smash 64</a>
				</span>

				<span className="navigation-link">
					<a href={this.LinkMelee} className="hide-link">Melee</a>
				</span>

				<span className="navigation-link">
					<a href={this.LinkBrawl} className="hide-link">Brawl</a>
				</span>

				<span className="navigation-link">
					<a href={this.LinkSmash4} className="hide-link">Smash 4</a>
				</span>

				<span className="navigation-link">
					<a href={this.LinkUltimate} className="hide-link">Ultimate</a>
				</span>
			</div>
		);
	}
}

export default NavigationHeader;
