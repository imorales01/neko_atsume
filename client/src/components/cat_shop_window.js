import React, { Component } from 'react';
import ShopWindowImg from '../img/UI/Windows/cat_shop.png';
import axios from 'axios';

// hard code height for now, depending on how big window container will be
const windowStyle = {
  backgroundImage: `url(${ShopWindowImg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  height: '250px',
  width: '230px'
};

const iconStyle = {
  height: "30%",
  position: "relative",
  top: "30%",
  margin: "auto"
};

const nameStyle = {
  position: "relative",
  top: "11%",
  fontFamily: "arial",
  textAlign: "center",
  height: "70%"
};

const priceStyle = {
  position: "relative",
  fontFamily: "arial",
  textAlign: "center",
  paddingLeft: "10px",
  top: "13%"
};

class CatShopWindow extends Component {
  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);  
    //this.buy = this.buy.bind(this);    
  }

  // ok actually handle the buy
  // add stamps on already bought items
  // maybe a buy button
  handleBuy(){
    //this.buy();
    alert(`You bought ${this.props.catData[0].name}!`);
  }
  // async buy(){
  //   const flag = await axios.get(`/api/cat/buy/${this.props.catData[0].catID}`);
  // }

  render() {
    let namePath = this.props.catData[0].name;
    // todo : dont hardcode this lol 
    if (namePath === 'Sassy Fran') {
      namePath = 'Sassy_Fran';
    }
    else if (namePath === 'Saint Purrtrick') {
      namePath = 'Saint_Purrtrick';
    }
    return (
      <div style={windowStyle}  onClick={ this.handleBuy }>
        <div style={nameStyle}>
          {this.props.catData[0].name}
          <br />
          <img src={require(`../img/cats/${namePath}/icon.png`)} style={iconStyle} />
        </div>
        <div style={priceStyle}>
          100
        </div>
      </div>
    );
  }
};

export default CatShopWindow;