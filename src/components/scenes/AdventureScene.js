import lodash from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import Bar from '../Bar';
import sharedProps from './sharedProps';


//
// TODO: floorの詳細を開いた時に下が隠れる場合、その分を上にずらす
//       下の3つくらいまでに必要な処理なので、動的に計算しないとダメみたい
//


const _floors = lodash.range(100).map((notUse, idx) => {
  return {
    typeId: 'enemy',
  };
})
;


export default class AdventureScene extends React.Component {

  _createFloorBarElements() {
    return _floors
      .slice().reverse()
      .map((floor, idx) => {
        return React.createElement(Bar, { key: 'bar-' + idx });
      })
    ;
  }

  componentDidMount() {
    const floorsDom = ReactDOM.findDOMNode(this).querySelector('.floors');
    floorsDom.scrollTop = floorsDom.scrollHeight;
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
