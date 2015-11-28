import React from 'react';

import Bar from '../Bar';
import sharedProps from './sharedProps';


const _floors = [
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


export default class AdventureScene extends React.Component {

  _createFloorBarElements() {
    return _floors
      .slice().reverse()
      .map((floor, idx) => {
        return React.createElement(Bar, { key: 'floor-bar-' + idx });
      })
    ;
  }

  render() {
    const floorBarElements = this._createFloorBarElements();

    const adventurerBarElement = <Bar />;

    return (
      <div className="scene adventure-scene">
        <div className="floors">
          { floorBarElements }
        </div>
        <div className="adventure-status">
          Lv.4 ゴブリンの洞窟 - 1/50F
        </div>
        <div className="adventurer-status">
          { adventurerBarElement }
        </div>
        <div className="next-button">Next</div>
      </div>
    );
  }
}
