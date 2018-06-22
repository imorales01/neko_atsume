import React, { Component } from 'react';
import AlbumWindowImg from '../img/UI/Windows/cat_album.png';

// hard code height for now, depending on how big window container will be
const windowStyle = {
  backgroundImage: `url(${AlbumWindowImg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  height: '250px',
  width: '230px'
};

const nameStyle = {
  position: "relative",
  top: "11%",
  fontFamily: "arial",
  textAlign: "center",
  height: "84%"
};

const dateStyle = {
  position: "relative",
  fontFamily: "arial",
  textAlign: "center",
};

class CatAlbumWindow extends Component {
  constructor(props) {
    super(props);
    console.log(props.catData);
  }
  render() {
    return (
      <div style={windowStyle}>
        <div style={nameStyle}>
          {this.props.flag ? this.props.catData[0].name : "? ? ? ?" } 
        </div>
        <div style={dateStyle}>
          {this.props.cat ? this.props.cat.name : "--/--/----" } 
        </div>
      </div>
    );
  }
};

export default CatAlbumWindow;