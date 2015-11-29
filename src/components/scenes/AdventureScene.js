import lodash from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import EventHandlerCarrier from 'lib/EventHandlerCarrier';
import { preventEvents, scrollUpToUnderline } from 'lib/utils';
import Bar from '../Bar';
import sharedProps from './sharedProps';


const _floors = lodash.range(100).map((notUse, idx) => {
  return {
    typeId: 'enemy',
    floorNumber: idx + 1,
  };
})
;


export default class AdventureScene extends React.Component {

  _createFloorBarElements() {

    const onMouseDown = (event, { emitter }) => {
      preventEvents(event);
      emitter.toggleDetail();

      // TODO: Should not refer HTMLElement props that they are changed by the current rendering.
      const dom = ReactDOM.findDOMNode(this);
      const floorsDom = dom.querySelector('.floors');
      const barDom = ReactDOM.findDOMNode(emitter);
      setTimeout(() => {
        scrollUpToUnderline(floorsDom, barDom);
      }, 0);
    };

    return _floors
      .slice().reverse()
      .map((floor) => {
        return React.createElement(Bar, {
          key: 'bar-' + floor.floorNumber,
          floorNumber: floor.floorNumber,
          onMouseDownCarrier: new EventHandlerCarrier(onMouseDown),
        });
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
