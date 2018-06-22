import React, { Component } from 'react';
import axios from 'axios';
import CatAlbumWindow from './cat_album_window';

const catStyle = {
  height: "30%",
};

class CatAlbumWindowContainer extends Component {
  constructor(props) {
    super(props);

    // cats is an array of all cats in database with
    // a boolean indicating if user has collected that cat
    // cats: [ {catData, isCollected} ]
    // catCount: number of all cats total
    // filled: if data about cats has already been retrieved
    this.state = {
      cats: [],
      catCount: 0,
      filled: false
    };

    this.getCats = this.getCats.bind(this);
  }

  // todo : faster to do this server-side?
  async getCats(){
    // get number of cats from database
    const catCount = await axios.get('api/cat/count');

    // catData: [{ }]
    const catData = [];
    for (let i=1; i<=count; i++){
      // the data for the cat with id i
      // cat IDs are enumerated from 1
      const cat = await axios.get('api/cat/i');
      // has the cat with id i been collected for this user
      const isCollected = await axios.get('api/cat/collected/i');
      catData.push(cat.data, isCollected.data);
    }
    
    this.setState( () => ({ cats: catData, catCount, filled: true }));
  }

  // render as many components as count
  render() {
    if(!this.state.filled){
      this.getCats();
    }
    return (
      <div style={catStyle}>
        <CatAlbumWindow catData={this.state.cats[0]}/>
      </div>
    );
  }
};

export default CatAlbumWindowContainer;