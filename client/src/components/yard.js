import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Menu from './menu';
import HotSpot from './hotspot';
import CatAlbum from './cat_album';

const yardStyle = {
  margin: '0',
  height: '100%',
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
};

class Yard extends Component {
  render() {
    // return (
    //   <div className='background-image' style={yardStyle}>
    //     <Menu />
    //     <CatAlbum />
    //   </div>
    // );
    // testing purposes:
    return <CatAlbum />;
  }
};

export default Yard;