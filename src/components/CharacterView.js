import React, { Component } from 'react';
import '../assets/css/characters.css';
import ImageHandler from '../ImageHandler';
import Character from './Character';
import MoveCard from './MoveCard';

class CharacterView extends Component {
  constructor(props){
    super(props);

    var path = props.match.path;
    var game = path.split('/').filter(x => x)[0].toLowerCase();
    this.characterName = props.match.params.name;

    var data = require('../assets/characters/' + game + '/' + this.characterName + '.json');
    this.characterData = new Character(data);
    this.state = {
      data: data
    };
  }

  render() {
    var self = this;
    if (this.state.data !== undefined) {

      let normalCards = Object.keys(self.characterData.normals).map(function (key, i) {
        var moveData = self.characterData.normals[key];
        return (
          <MoveCard key={moveData.moveName} move={moveData} />
        )
      });

      let aerialCards = Object.keys(self.characterData.aerials).map(function (key, i) {
        var moveData = self.characterData.aerials[key];
        return (
          <MoveCard key={moveData.moveName} move={moveData} />
        )
      });

      let specialCards = Object.keys(self.characterData.specials).map(function (key, i) {
        var moveData = self.characterData.specials[key];
        return (
          <MoveCard key={moveData.moveName} move={moveData} />
        )
      });

      let grabsThrowsCard = Object.keys(self.characterData.grabsThrows).map(function (key, i) {
        var moveData = self.characterData.grabsThrows[key];
        return (
          <MoveCard key={moveData.moveName} move={moveData} />
        )
      });

      let miscCard = Object.keys(self.characterData.misc).map(function (key, i) {
        var moveData = self.characterData.misc[key];
        return (
          <MoveCard key={moveData.moveName} move={moveData} />
        )
      });

      return (
        <div id="character-main">
        <h2 id="character-name">{this.state.data.name}</h2>

        <div id="characterImageDiv">
        <img className={`character-list`}src={require("../assets/img/renders/" + this.characterName.toLowerCase().replace(/\./g, '').replace(/ /g, '_').replace(/&/g, 'and') + '.jpg')} alt={this.characterName} />
        </div>

        <div>
        <h3 className="moveHeader">Normals</h3>
        <div className="move-card-deck">
        {normalCards}
        </div>
        </div>

        <div>
        <h3 className="moveHeader">Aerials</h3>
        <div className="move-card-deck">
        {aerialCards}
        </div>
        </div>

        <div>
        <h3 className="moveHeader">Specials</h3>
        <div className="move-card-deck">
        {specialCards}
        </div>
        </div>

        <div>
        <h3 className="moveHeader">Grabs/Throws</h3>
        <div className="move-card-deck">
        {grabsThrowsCard}
        </div>
        </div>

        <div>
        <h3 className="moveHeader">Miscellaneous</h3>
        <div className="move-card-deck">
        {miscCard}
        </div>
        </div>
        </div>
      );
    }else{
      if(this.state.error !== undefined){
        return (
          <div id="character-main">
          <ImageHandler message={this.state.error} image={"error.png"} alt="Error" class="invalid-char-image" />
          </div>
        );
      }else{
        return (
          <div id="character-main">
          <ImageHandler />
          </div>
        );
      }

    }
  }
}

export default CharacterView;
