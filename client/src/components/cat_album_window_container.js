import React, { Component } from 'react';
import CatAlbumWindow from './cat_album_window';

const catStyle = {
  height: "30%"
};

class CatAlbumWindowContainer extends Component {
  constructor(props) {
    super(props);
  }

  // i cant get components to stop overlapping or to align horizontally
  //rendering one, for now
  render() {
    return (
      <div style={catStyle}>
        <CatAlbumWindow />

      </div>
    );
  }
};

export default CatAlbumWindowContainer;