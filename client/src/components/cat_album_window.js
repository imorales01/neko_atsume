import React, { Component } from 'react';
import axios from 'axios';
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
    this.getCats = this.getCats.bind(this);
  }
  async getCats(){
    // console.log("waiting...");
    // const response = await axios.get('api/sample');
    // console.log(response.data);
  }
  render() {
    this.getCats();
    return (
      <div style={windowStyle}>
        <div style={nameStyle}>
          ? ? ? ?
        </div>
        <div style={dateStyle}>
          ----/--/--
        </div>
      </div>
    );
  }
};

export default CatAlbumWindow;