import React from 'react';

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

  _toggleDetail() {
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
        onMouseDown={ () => this._toggleDetail() }
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
