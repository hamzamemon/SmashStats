import React, { Component } from 'react';
import '../assets/css/styles.css';
import * as constants from './Constants';

class MoveCard extends Component {
  constructor(props) {
    super(props);
    this.constants = constants;
  }

  ifValueExists(value) {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }

    return value !== 0 && value !== '' && value !== '?' && value !== undefined;
  }

  getFromHitFrames() {
    var move = this.props.move;
    if (!('hitFrames' in move) || move.hitFrames.length === 0) {
      return '';
    }

    var hitFramesData = {
      hitboxActive: '',
      damage: '',
      BKB: '',
      FKB: '',
      KBG: '',
      angle: '',
      shieldDamage: '',
    };

    for (const i in move.hitFrames) {
      const hitFrame = move.hitFrames[i];

      hitFramesData.hitboxActive += `${hitFrame.start}`;
      if (hitFrame.start !== hitFrame.end) {
        hitFramesData.hitboxActive += `-${hitFrame.end}`;
      }
      for (const key1 in hitFrame.hitboxes) {
        var hitbox = hitFrame.hitboxes[key1];
        for (const key2 in hitbox) {
          if (key2 in hitFramesData) {
            hitFramesData[key2] += `${hitbox[key2]}/`;
          }
        }
      }

      hitFramesData = this.normalizeHitFramesData(hitFramesData);
      hitFramesData.damage += '%';
      for (const key in hitFramesData) {
        hitFramesData[key] = `${hitFramesData[key]}, `;
      }
    }

    hitFramesData = this.normalizeHitFramesData(hitFramesData);
    for (const key in hitFramesData) {
      if (hitFramesData[key].endsWith(', ')) {
        hitFramesData[key] = hitFramesData[key].slice(0, -2);
      }
    }

    return hitFramesData;
  }

  normalizeHitFramesData(hitFramesData) {
    console.log('before', hitFramesData);
    for (const key in hitFramesData) {
      if (hitFramesData[key].charAt(hitFramesData[key].length - 1) === '/') {
        hitFramesData[key] = hitFramesData[key].slice(0, -1);
      }

      {
        /*

      If (hitFramesData[key].indexOf('/') >= 0) {
        var equals = hitFramesData[key].split('/').every((value, index, array) => {
          return value === array[0];
        });
        if (equals) {
          hitFramesData[key] = hitFramesData[key].split('/')[0];
        }
      }
          */
      }
    }

    console.log('after', hitFramesData);
    return hitFramesData;
  }

  addNotes(autoCancelBefore, autoCancelAfter, invulnerability, chargeFrame, reflects, absorbs) {
    var notes = '';

    if (this.ifValueExists(autoCancelBefore) && this.ifValueExists(autoCancelAfter)) {
      notes += `Auto cancels before frame ${autoCancelBefore} and after ${autoCancelAfter}. `;
    } else if (this.ifValueExists(autoCancelBefore)) {
      notes += `Auto cancels before frame ${autoCancelBefore}. `;
    } else if (this.ifValueExists(autoCancelAfter)) {
      notes += `Auto cancels after frame ${autoCancelAfter}. `;
    }

    if (this.ifValueExists(invulnerability)) {
      notes += `Invulnerability on frame(s) ${invulnerability}. `;
    }

    if (this.ifValueExists(chargeFrame)) {
      notes += `Charge frame is ${chargeFrame}. `;
    }

    if (this.ifValueExists(reflects)) {
      notes += `Reflects on frame(s) ${reflects}. `;
    }

    if (this.ifValueExists(absorbs)) {
      notes += `Absorbs on frame(s) ${absorbs}. `;
    }

    return notes.trim();
  }

  render() {
    const {
      moveName,
      FAF,
      gifs,
      IASA,
      landingLag,
      lcancelledLandingLag,
      autoCancelBefore,
      autoCancelAfter,
      invulnerability,
      chargeFrame,
      reflects,
      absorbs,
    } = this.props.move;
    const notes = this.addNotes(
      autoCancelBefore,
      autoCancelAfter,
      invulnerability,
      chargeFrame,
      reflects,
      absorbs
    );

    var hitFramesData = this.getFromHitFrames();
    console.log(hitFramesData);

    return (
      <div className='move-card'>
        <div className='move-card-move-name'>{moveName}</div>

        {this.ifValueExists(gifs) && (
          <div className='hitbox'>
            {gifs.map((value, index) => {
              return (
                <div>
                  <img
                    src={require(`../${this.constants.CHARACTER_ASSETS}/${this.constants.MELEE}/${this.props.formattedName}/${value}`)}
                    alt={`Alt: ${value}`}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        )}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.hitboxActive) && (
          <div>Hitbox Active: {hitFramesData.hitboxActive}</div>
        )}
        <div>FAF: {FAF}</div>
        {this.ifValueExists(IASA) && <div>IASA: {IASA}</div>}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.damage) && (
          <div>Damage: {hitFramesData.damage}</div>
        )}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.BKB) && (
          <div>BKB: {hitFramesData.BKB}</div>
        )}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.FKB) && (
          <div>FKB: {hitFramesData.FKB}</div>
        )}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.KBG) && (
          <div>KBG: {hitFramesData.KBG}</div>
        )}
        {this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.angle) && (
          <div>Angle: {hitFramesData.angle}</div>
        )}
        {this.ifValueExists(landingLag) && !this.ifValueExists(lcancelledLandingLag) && (
          <div>Landing Lag: {landingLag}</div>
        )}
        {this.ifValueExists(landingLag) && this.ifValueExists(lcancelledLandingLag) && (
          <div>
            {' '}
            Landing Lag: {landingLag}. L cancel: {lcancelledLandingLag}{' '}
          </div>
        )}
        {/*
				{this.ifValueExists(hitFramesData) && this.ifValueExists(hitFramesData.shieldDamage)
          && <div>Shield Damage: {hitFramesData.shieldDamage}</div>
				}
        */}
        {this.ifValueExists(notes) && <div>Notes: {notes}</div>}
      </div>
    );
  }
}

export default MoveCard;
