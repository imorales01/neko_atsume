import React, { Component } from 'react';
import axios from 'axios';
import AlbumWindow from './cat_album_window';
import ShopWindow from './cat_shop_window';

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

class WindowContainer extends Component {
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
      let windowComponent;
      switch (this.props.type) {
        case 'Album':
          windowComponent = <AlbumWindow
              catData={cat.data}
              dateCollected={cat.date}
            />;
          break;
        case 'Shop':
          windowComponent = <ShopWindow
              catData={cat.data}
              dateCollected={cat.date}
            />;
        break;
        default:
        case 'Inventory':
          windowComponent = null;
        break;
      }
      return (
        <div className="window"
          key={cat.data[0].catID}
          style={windowStyling[`quadrant${index%4}`]
        }>
          {windowComponent}
        </div>);
    });

    this.setState(() => ({ windows }));
  }

  render() {
    let page = this.props.page;
    let startIndex = page * 4;
    let endIndex = (page*4) + 4 > this.catCount ? this.catCount : (page*4) + 4;
    return (
      <div className="window-container">
        {this.state.windows ? this.state.windows.slice(startIndex, endIndex) : null}
      </div>
    );
  }
};

export default WindowContainer;
