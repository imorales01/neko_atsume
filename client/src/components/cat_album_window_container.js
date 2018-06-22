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
    // const count = await axios.get('/api/cat/count');
    // console.log(count.data);

    // catData: [{ }]
    const catData = [];
    for (let i=1; i<=7; i++){
      // the data for the cat with id i
      // cat IDs are enumerated from 1
      const cat = await axios.get(`api/cat/${i}`);

      catData.push(cat.data);
    }
    
    this.setState( () => ({ cats: catData, catCount: 7, filled: true }));
    console.log(this.state.cats);
  }

  // render as many components as count
  render() {
    if(!this.state.filled){
      this.getCats();
    }
    const windows = this.state.cats.map((cat) => {<CatAlbumWindow catData={cat}/>});
    return (
      <div style={catStyle}>
        {windows}
      </div>
    );
  }
};

export default CatAlbumWindowContainer;