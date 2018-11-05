import React, { Component } from 'react';
import PlaceDownButton from '../img/UI/place.png';

const catAndToyStyle = { position: 'absolute', height: '100%', width: '100%' };

class HotSpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      randNum: null,
      namePath: null,
      toy: null,
      hotStyle: this.props.hotStyle,
      catStyle: this.props.catStyle,
    };
    this.onClick = this.onClick.bind(this);
  }

  // FIXME: dont hard code this
  onClick() {
    // const randNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    // const randNum2 = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    // const names = ['Willie', 'Shadow', 'Peaches', 'Rascal'];
    // const namePath = names[randNum2];
    // this.setState(() => ({ namePath, randNum, isEmpty: false }));
    
    const types = ['balls', 'pillows'];
    const toys = {
      'balls': ['redball'],
      'pillows': ['mochi', 'sheep', 'beige'],
    };

    const randType = types[Math.floor(Math.random() * ((types.length-1) - 0 + 1)) + 0];
    const randToy = toys[randType][Math.floor(Math.random() * ((toys[randType].length-1) - 0 + 1)) + 0];

    this.setState(() => ({
      namePath: randType,
      randNum: 1,
      toy: randToy,
      isEmpty: false
    }));
  }

  render() {
    // TODO: remove onClick for the cat picture. thats there for testing purposes only
    return (
      <div>
        {(this.state.isEmpty)
          ? <img
              src={PlaceDownButton}
              alt={`Hotspot that shows you can click to place a cat, number ${this.props.number}`}
              onClick={this.onClick}
              className="hotspot"
              id={`hotspot${this.props.number}`}
            />
          : 
          <div>
            <div style={catAndToyStyle}>
              <img
                src={require(`../img/toys_cats/${this.state.namePath}/${this.state.randNum}.gif`)}
                alt={`${this.state.namePath}`}
                className='cat'
                id={`cat${this.props.number}`}
                onClick={this.onClick}
              />
            </div>
            <div style={catAndToyStyle}>
              <img
                src={require(`../img/toys_cats/${this.state.namePath}/${this.state.toy}.gif`)}
                alt={`${this.state.namePath}`}
                className='cat'
                id={`cat${this.props.number}`}
                onClick={this.onClick}
              />
            </div>
          </div>
        }
      </div>
    );
  }
};

export default HotSpot;
