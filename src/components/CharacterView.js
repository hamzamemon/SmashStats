import React, { Component } from 'react';
import '../assets/css/styles.css';
import ImageHandler from '../ImageHandler';
import Character from './Character';
import MoveCard from './MoveCard';
import * as constants from './Constants';

class CharacterView extends Component {
	constructor(props) {
		super(props);

		var path = props.match.path;
		var game = path
			.split('/')
			.filter((x) => x)[0]
			.toLowerCase();
		this.characterName = props.match.params.name;
		this.constants = constants;

		var data = require(`../${this.constants.CHARACTER_ASSETS}/${this.constants.MELEE}/${this.characterName}/${this.characterName}.json`);
		this.characterData = new Character(data, game);
		this.state = {
			data: data
		};
	}

	render() {
		var self = this;
		if (this.state.data !== undefined) {
			const normalCards = Object.keys(self.characterData.normals).map((key) => {
				var moveData = self.characterData.normals[key];
				return (
					<MoveCard key={key} move={moveData} formattedName={this.characterData.formattedName} />
				);
			});

			const aerialCards = Object.keys(self.characterData.aerials).map((key) => {
				var moveData = self.characterData.aerials[key];
				return (
					<MoveCard key={key} move={moveData} formattedName={this.characterData.formattedName} />
				);
			});

			const specialCards = Object.keys(self.characterData.specials).map((key) => {
				var moveData = self.characterData.specials[key];
				return (
					<MoveCard key={key} move={moveData} formattedName={this.characterData.formattedName} />
				);
			});

			const grabsThrowsCard = Object.keys(self.characterData.grabsThrows).map((key) => {
				var moveData = self.characterData.grabsThrows[key];
				return (
					<MoveCard key={key} move={moveData} formattedName={this.characterData.formattedName} />
				);
			});

			const miscCard = Object.keys(self.characterData.misc).map((key) => {
				var moveData = self.characterData.misc[key];
				return (
					<MoveCard key={key} move={moveData} formattedName={this.characterData.formattedName} />
				);
			});

			return (
				<div>
					<h2 className="character-name">{this.state.data.name}</h2>

					<div className="character-image-div">
						<img
							className="character-render"
							src={require(`../assets/img/renders/${this.characterName
								.toLowerCase()
								.replace(/\./g, '')
								.replace(/ /g, '_')
								.replace(/&/g, 'and')}.jpg`)}
							alt={this.characterName}
						/>
					</div>

					<div className="moves-container">
						<div>
							<h3 className="move-header">Normals</h3>
							<div className="move-card-deck">{normalCards}</div>
						</div>

						<div>
							<h3 className="move-header">Aerials</h3>
							<div className="move-card-deck">{aerialCards}</div>
						</div>

						<div>
							<h3 className="move-header">Specials</h3>
							<div className="move-card-deck">{specialCards}</div>
						</div>

						<div>
							<h3 className="move-header">Grabs/Throws</h3>
							<div className="move-card-deck">{grabsThrowsCard}</div>
						</div>

						<div>
							<h3 className="move-header">Miscellaneous</h3>
							<div className="move-card-deck">{miscCard}</div>
						</div>
					</div>
				</div>
			);
		}
		else if (this.state.error !== undefined) {
			return (
				<div>
					<ImageHandler
						message={this.state.error}
						image={'error.png'}
						alt="Error"
						class="invalid-char-image"
					/>
				</div>
			);
		}
		else {
			return (
				<div>
					<ImageHandler />
				</div>
			);
		}
	}
}

export default CharacterView;
