import React, { Component } from 'react';
import axios from 'axios';
import CatAlbumWindow from './cat_album_window';

const catStyle = {
  height: "30%",
  margin: "auto",
  width: "50%",
  position: "relative"
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
      cats: [{
            data: null,
            date: null
          }],
      catCount: 0,
      filled: false,
      windows: [],
    };

    this.getCats = this.getCats.bind(this);
  }

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
    
    let windows = catData.map((cat) => {
      return <CatAlbumWindow catData={cat.data} date={cat.date}/>;
    });
    // let window = <CatAlbumWindow key={this.state.cats[0].data.catID} catData={this.state.cats[0].data} flag={this.state.cats[0].flag}/>;
    console.log(windows);
    this.setState( () => ({ cats: catData, catCount: 7, filled: true, windows: windows}));
    
  }

  // render as many components as count
  render() {
    if(!this.state.filled){
      this.getCats();
    }
    return (
      <div style={catStyle}>
        {this.state.windows.slice(0,4)}
      </div>
    );
  }
};

export default CatAlbumWindowContainer;