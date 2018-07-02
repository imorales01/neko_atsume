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

   
    let windows = catData.map((cat, i) => {
      let x = {
        0: {
        },
        1: {
          left: "50%"
        },
        2: {
          top: "50%",
        },
        3: {
          top: "50%",
          left: "50%"
        }
    
      }
      
      return <div className="window" style={x[i%4]}> <CatShopWindow catData={cat.data} date={cat.date}/> </div>;
    });

    this.setState(() => ({ cats: catData, catCount: 7, filled: true, windows: windows }));

  }

  // render as many components as count
  render() {
    if (!this.state.filled) {
      this.getCats();
    }

    let i = this.props.page;
    
        return (
          <div className="window-container">
            {
              ((i*4)+4 > this.state.catCount)
                ? this.state.windows.slice(i*4, this.state.catCount)
                : this.state.windows.slice(i*4, i+4)
            }
          </div>
    );
  }
};


export default CatShopWindowContainer;