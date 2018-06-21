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

class CatAlbumWindow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    
  }
  render() {
    return (
      <div style={windowStyle}>
        <button onClick={this.handleClick}> Load! </button>
      </div>
    );
  }
};

export default CatAlbumWindow;