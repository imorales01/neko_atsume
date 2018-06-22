import React, { Component } from 'react';
import HotSpot from './hotspot';

const containerStyle = {
  height: "63%"
}

const hotStyle = {
  height: "20%",
  width: "20%",
  paddingLeft: "20px"
}

class HotSpotContainer extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <HotSpot style={hotStyle} paddingLeft={"75px"} paddingTop={"180px"} paddingLeftCat={"150px"} paddingTopCat={"160px"} />
        <HotSpot style={hotStyle} paddingLeft={"435px"} paddingTop={"0px"} paddingLeftCat={"450px"} paddingTopCat={"0px"} />
      </div>
    );
  }
};

export default HotSpotContainer;