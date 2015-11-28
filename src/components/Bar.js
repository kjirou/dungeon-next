import React from 'react';

import AnimatedIcon from './AnimatedIcon';


export default class Bar extends React.Component {

  render() {

    return (
      <div className="bar">
        <div className="headline">
          <AnimatedIcon />
        </div>
        <div className="details">
        </div>
      </div>
    );
  }
}
