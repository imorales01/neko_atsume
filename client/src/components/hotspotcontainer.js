import React, { Component } from 'react';
import HotSpot from './hotspot';

const hotStyle = {
  height: '20%',
  width: '20%',
  paddingLeft: '20px'
}

class HotSpotContainer extends Component {
  render() {
    return (
      <div style={{ height: '63%' }}>
        <HotSpot
          style={hotStyle}
          paddingLeft="75px"
          paddingTop="220px"
          paddingLeftCat="160px"
          paddingTopCat="200px"
        />
        <HotSpot
          style={hotStyle}
          paddingLeft="520px"
          paddingTop="0px"
          paddingLeftCat="600px"
          paddingTopCat="0px"
        />
      </div>
    );
  }
};

export default HotSpotContainer;