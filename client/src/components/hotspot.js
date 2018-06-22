import React, { Component } from 'react';
import PlaceDownButton from '../img/UI/place.png';

const hotStyle = {
  margin: "auto",
  height: "20%",
  width: "20%"
}

class HotSpot extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEmpty: true,
      randNum: null,
      namePath: null
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    const randNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const randNum2 = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    const names = ['Willie', 'Shadow', 'Peaches', 'Rascal'];
    const namePath = names[randNum2];
    this.setState(() => ({ namePath, randNum, isEmpty: false }));
  }
  render() {
    return (
      <div>
          { this.state.isEmpty ? <img src={PlaceDownButton} onClick={this.onClick} className='hotspot' /> :
            <img src={require(`../img/cats/${this.state.namePath}/${this.state.randNum}.gif`)} className='cat' />} 
      </div>
    );
  }
};

export default HotSpot;