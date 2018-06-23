import React, { Component } from 'react';
import PlaceDownButton from '../img/UI/place.png';

const catStyle = {
  paddingLeft: '150px',
  paddingTop: '160px'
}

class HotSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      randNum: null,
      namePath: null,
      hotStyle: {
        paddingLeft: this.props.paddingLeft,
        paddingTop: this.props.paddingTop
      },
      catStyle: {
        paddingLeft: this.props.paddingLeftCat,
        paddingTop: this.props.paddingTopCat
      }
    };
    this.onClick = this.onClick.bind(this);
  }
  // todo: dont hard code this
  onClick() {
    const randNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const randNum2 = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    const names = ['Willie', 'Shadow', 'Peaches', 'Rascal'];
    const namePath = names[randNum2];
    this.setState(() => ({ namePath, randNum, isEmpty: false }));
  }
  render() {
    return (
      <div>
        {(this.state.isEmpty)
            ? <img
                src={PlaceDownButton}
                onClick={this.onClick}
                className="hotspot"
                style={this.state.hotStyle}
              />
            : <img
                src={require(`../img/cats/${this.state.namePath}/${this.state.randNum}.gif`)}
                className="cat"
                style={this.state.catStyle}
                onClick={this.onClick}
              />
        }
      </div>
    );
  }
};

export default HotSpot;