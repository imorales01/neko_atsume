import React, { Component } from 'react';
import PlaceDownButton from '../img/UI/place.png';
//import PlaceHolderButton from '../img/UI/transparent.png';

const hotStyle = {
  margin: "auto",
  height: "20%",
  width: "20%"
}

class HotSpot extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    alert("hello");
  }
  render() {
    return (
      <div>
        <img src={PlaceDownButton} onClick={this.onClick} className='hotspot' />
      </div>
    );
  }
};

export default HotSpot;