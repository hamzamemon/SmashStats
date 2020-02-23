import React, { Component } from 'react';
import ImageHandler from '../ImageHandler.js';
import Characters from '../assets/characters.json';

class MeleeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: Characters
    };

    this.path = "#/Melee/";
  }

  render() {
    if(this.state.list !== '' && this.state.list !== undefined){
      return (
        <div id="character-selection">
        {
          this.state.list.map((character) => {
            return (
              <span className="character-span" key={character.Name}>
              <a href={this.path + character.Name.toLowerCase().replace(/\./g, '').replace(/ /g, '_').replace(/&/g, 'and')}>
              <img className={`character-list series-${character.series}`}src={require("../assets/img/characters/" + character.Name.toLowerCase().replace(/\./g, '').replace(/ /g, '_').replace(/&/g, 'and') + '.jpg')} alt={character.Name} />
              </a>
              </span>
            )
          })
        }
        </div>
    );
    }
    if(this.state.error !== undefined){
      return (
        <ImageHandler message={this.state.error} image={"error.png"}/>
      )
    }else{
      return (
        <ImageHandler/>
      );
    }
  }
}

export default MeleeList;
