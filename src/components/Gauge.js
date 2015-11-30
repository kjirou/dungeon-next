import React from 'react';


export default class Gauge extends React.Component {

  render() {
    const gaugeStyle = {
      width: (this.props.rate * 100).toFixed(2) + '%',
    }

    return (
      <div className={ ['gauge'].concat(this.props.classNames).join(' ') }>
        <div className="gauge-bar" style={ gaugeStyle } />
      </div>
    );
  }
}

Object.assign(Gauge, {
  defaultProps: {
    classNames: [],
  },
  propTypes: {
    classNames: React.PropTypes.array,
    rate: React.PropTypes.number.isRequired,
  },
});
