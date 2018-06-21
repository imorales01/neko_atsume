import React, { Component } from 'react';
import axios from 'axios';
import CatAlbumWindow from './cat_album_window';

const catStyle = {
  height: "30%",
};

class CatAlbumWindowContainer extends Component {
  constructor(props) {
    super(props);
    
        this.state = {
          cats: []
        };
    
        this.getCats = this.getCats.bind(this);
  }
  async getCats(){
    // get all cats from database
    const response = await axios.get('api/cat');
    this.setState( () => ({ cats: response.data }));
    console.log(this.state.cats);
  }
  // i cant get components to stop overlapping or to align horizontally
  //rendering one, for now
  render() {
    if(!this.state.cats){
      this.getCats();
    }
    return (
      <div style={catStyle}>
        <CatAlbumWindow />

      </div>
    );
  }
};

export default CatAlbumWindowContainer;