import React from 'react';

import MiniCard from '../MiniCard';
import sharedProps from './sharedProps';


export default class AdventureScene extends React.Component {

  _createDungeonCardElements() {
    const dungeonCardList = [
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
      {
        typeId: 'enemy',
      },
    ];

    return dungeonCardList
      .slice(0, 6)
      .map((dungeonCard, idx) => {
        return React.createElement(MiniCard, { key: 'mini-card-' + idx });
      })
    ;
  }

  render() {
    const dungeonCardElements = this._createDungeonCardElements();

    return (
      <div className="scene adventure-scene">
        <ul className="mini-dungeon-cards">
          { dungeonCardElements }
        </ul>
      </div>
    );
  }
}
