import React, { Component } from 'react';
import '../assets/css/moves.css';

class MoveCard extends Component {
  constructor(props) {
    super(props);
  }

  ifValueExists(value) {
    return value !== 0 && value !== '' && value !== undefined;
  }

  addNotes(autoCancelBefore, autoCancelAfter, invulnerability, chargeFrame, reflects, absorbs) {
    var notes = '';

    if (this.ifValueExists(autoCancelBefore) && this.ifValueExists(autoCancelAfter)) {
      notes += 'Auto cancels before frame ' + autoCancelBefore + ' and ' + autoCancelAfter + '. ';
    }
    else if (this.ifValueExists(autoCancelBefore)) {
      notes += 'Auto cancels before frame ' + autoCancelBefore + '. ';
    }
    else if (this.ifValueExists(autoCancelAfter)) {
      notes += 'Auto cancels after frame ' + autoCancelAfter + '. ';
    }

    if (this.ifValueExists(invulnerability)) {
      notes += 'Invulnerability on frame(s) ' + invulnerability + '. ';
    }

    if (this.ifValueExists(chargeFrame)) {
      notes += 'Charge frame is ' + chargeFrame + '. ';
    }

    if (this.ifValueExists(reflects)) {
      notes += 'Reflects on frame(s) ' + reflects + '. ';
    }

    if (this.ifValueExists(absorbs)) {
      notes += 'Absorbs on frame(s) ' + absorbs + '. ';
    }

    return notes.trim();
  }

  render() {
    let { moveName, FAF, IASA, BKB, WBKB, KBG, angle, damage, hitboxActive, shieldDamage, landingLag, lcancelledLandingLag, autoCancelBefore, autoCancelAfter, invulnerability, chargeFrame, reflects, absorbs } = this.props.move;
    let notes = this.addNotes(autoCancelBefore, autoCancelAfter, invulnerability, chargeFrame, reflects, absorbs);

    return (
      <div id="moveCard">
      <div id="moveCardMoveName">
      {moveName}
      </div>

      {
        this.ifValueExists(hitboxActive) &&
        <div>Hitbox Active: {hitboxActive}</div>
      }
      <div>FAF: {FAF}</div>
      {this.ifValueExists(IASA) &&
        <div>IASA: {IASA}</div>
      }
      {
        this.ifValueExists(damage) &&
          <div>Damage: {damage}</div>
      }
      {
        this.ifValueExists(BKB) &&
          <div>BKB: {BKB}</div>
      }
      {
        this.ifValueExists(WBKB) &&
          <div>WBKB: {WBKB}</div>
      }
      {
        this.ifValueExists(KBG) &&
          <div>KBG: {KBG}</div>
      }
      {
        this.ifValueExists(angle) &&
          <div>Angle: {angle}</div>
      }
      {
        this.ifValueExists(landingLag) && !this.ifValueExists(lcancelledLandingLag) &&
          <div>Landing Lag: {landingLag}</div>
      }
      {
        this.ifValueExists(landingLag) && this.ifValueExists(lcancelledLandingLag) &&
          <div>Landing Lag: {landingLag}. L cancel: {lcancelledLandingLag}</div>
      }
      {
        this.ifValueExists(shieldDamage) &&
          <div>Shield Advantage: {shieldDamage}</div>
      }
      {
        this.ifValueExists(notes) &&
          <div>Notes: {notes}</div>
      }
      </div>
    );
  }
}

export default MoveCard;
