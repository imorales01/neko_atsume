import React, { Component } from 'react';
import axios from 'axios';
import CatAlbumWindow from './cat_album_window';

const windowStyling = {
  quadrant0: {},
  quadrant1: {
    left: "50%"
  },
  quadrant2: {
    top: "50%",
  },
  quadrant3: {
    top: "50%",
    left: "50%"
  }
}

class CatAlbumWindowContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windows: [],
    }
    this.catCount = this.getCatCount();    
    this.fillCatWindows();
  }

  getCatCount() {
    // hard coded for now
    return 7;
  }

  async fillCatWindows() {
    const catData = [];
    for (let i = 1; i <= 7; i++) {
      // cat IDs are enumerated from 1
      const cat = await axios.get(`api/cat/shop/${i}`);
      catData.push(cat.data);
    }
    let windows = catData.map((cat, index) => {
      return (
        <div className="window" style={windowStyling[`quadrant${index%4}`]}>
          <CatAlbumWindow catData={cat.data} dateCollected={cat.date}/>
        </div>);
    });

    this.setState(() => ({ windows }));
  }

  render() {
    let page = this.props.page;
    let startIndex = page * 4;
    let endIndex = (page*4) + 4 > this.catCount ? this.catCount : (page*4) + 4;
    console.log(this.state.windows);
    return (
      <div className="window-container">
        {this.state.windows ? this.state.windows.slice(startIndex, endIndex) : null}
      </div>
    );
  }
};

export default CatAlbumWindowContainer;
