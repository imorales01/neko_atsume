import React, { Component } from 'react';
import CatShopWindow from './cat_shop_window';
import axios from 'axios';

class CatShopWindowContainer extends Component {
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
        hasCollected: false
      }],
      catCount: 0,
      filled: false,
      windows: [],
    };

    this.getCats = this.getCats.bind(this);
  }

  async getCats() {
    // get number of cats from database
    // const count = await axios.get('/api/cat/count');
    // console.log(count.data);

    // catData: [{ }]
    const catData = [];
    for (let i = 1; i <= 7; i++) {
      // the data for the cat with id i
      // cat IDs are enumerated from 1
      const cat = await axios.get(`api/cat/shop/${i}`);

      catData.push(cat.data);
    }

    let windows = catData.map((cat) => {
      return <CatShopWindow catData={cat.data} hasCollected={cat.hasCollected} />;
    });
    this.setState(() => ({ cats: catData, catCount: 7, filled: true, windows: windows }));

  }

  // render as many components as count
  render() {
    if (!this.state.filled) {
      this.getCats();
    }
    // right now this relies on the falsiness of page 0 and truthiness of page 1
    // TODO: change that in the future
    return (
      <div className="window-container">
        {this.props.page ? this.state.windows.slice(4) : this.state.windows.slice(0, 4)}
      </div>
    );
  }
};


export default CatShopWindowContainer;