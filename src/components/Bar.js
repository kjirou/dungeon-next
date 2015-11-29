import React from 'react';

import EventHandlerCarrier from 'lib/EventHandlerCarrier';
import AnimatedIcon from './AnimatedIcon';


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

  render() {

    return (
      <div
        className="bar"
        onMouseDown={ this.props.onMouseDownCarrier.bindContexts(this, event) }
      >
        <div className="headline">
          <AnimatedIcon />
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
    onMouseDownCarrier: new EventHandlerCarrier(),
  },
  propTypes: {
    onMouseDownCarrier: React.PropTypes.instanceOf(EventHandlerCarrier),
  },
});
