import React from 'react';

import EventHandlerCarrier from 'lib/EventHandlerCarrier';
import AnimatedIcon from './AnimatedIcon';
import Gauge from './Gauge';


export default class Bar extends React.Component {

  constructor() {
    super();

    this._isDetailShowing = false;
  }

  _syncState() {
    this.setState({
      isDetailShowing: this._isDetailShowing,
    });
  }

  toggleDetail() {
    this._isDetailShowing = !this._isDetailShowing;
    this._syncState();
  }

  _generateDetailClassName() {
    const classNames = ['detail'];
    if (this._isDetailShowing) classNames.push('is-showing');
    return classNames.join(' ');
  }

  _createHpGaugeElement() {
    if (this.props.hpRate === null || this.props.hpRate >= 1.0) {
      return null;
    }
    return React.createElement(Gauge, {
      classNames: ['hp-gauge'],
      rate: this.props.hpRate,
    });
  }

  render() {
    let floorNumberElement = null;
    if (this.props.floorNumber !== null) {
      floorNumberElement = <div key="floor-number" className="floor-number" >{ this.props.floorNumber }</div>;
    }
    const hpGaugeElement = this._createHpGaugeElement();

    return (
      <div
        className="object-bar"
        onMouseDown={ this.props.onMouseDownCarrier.bindContexts(this, event) }
      >
        <div className="headline">
          <div className="headline-column-left headline-column">
            { floorNumberElement }
            { hpGaugeElement }
            <AnimatedIcon iconId={ this.props.iconId } />
          </div>
          <div className="headline-column-center headline-column">
            <div className="nameplate">
              <span className="floor-type-name">敵</span>
              <span className="separator">:</span>
              <span className="floor-title">ゴブリン</span>
            </div>
            <div className="buffs">
              <span className="positive-buff buff">士気3</span>
              <span className="positive-buff buff">加速4</span>
              <span className="negative-buff buff">毒2</span>
              <span className="neutral-buff buff">軟化1</span>
            </div>
          </div>
          <div className="headline-column-right headline-column">
            <AnimatedIcon iconId="sword" />
            <div className="hit">95%x2</div>
            <div className="damage">!微傷+</div>
          </div>
        </div>
        <div className={ this._generateDetailClassName() }>
          <div>Detail</div>
          <div>Detail</div>
          <div>Detail</div>
        </div>
      </div>
    );
  }
}

Object.assign(Bar, {
  defaultProps: {
    floorNumber: null,
    hpRate: null,
    onMouseDownCarrier: new EventHandlerCarrier(),
  },
  propTypes: {
    floorNumber: React.PropTypes.number,
    hpRate: React.PropTypes.number,
    iconId: React.PropTypes.string.isRequired,
    onMouseDownCarrier: React.PropTypes.instanceOf(EventHandlerCarrier),
  },
});
