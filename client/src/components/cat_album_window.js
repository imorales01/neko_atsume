import React, { Component } from 'react';
import AlbumWindowImg from '../img/UI/Windows/cat_album.png';

// hard code height for now, depending on how big window container will be
const windowStyle = {
  backgroundImage: `url(${AlbumWindowImg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '85% 85%',
  height: '250px',
  width: '230px'
};

const dateStyle = {
  position: 'relative',
  fontFamily: 'arial',
  textAlign: 'center',
  top: '8%'
};

class CatAlbumWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let namePath = this.props.catData[0].name;
    // todo : dont hardcode this lol 
    if (namePath === 'Sassy Fran') {
      namePath = 'Sassy_Fran';
    }
    else if (namePath === 'Saint Purrtrick') {
      namePath = 'Saint_Purrtrick';
    }
    return (
      <div style={windowStyle}>
        <div className='name' style={{ top: '16%' }}>
          {this.props.date ? this.props.catData[0].name : '? ? ? ?'}
          <br />
          <img src={this.props.date ? require(`../img/cats/${namePath}/icon.png`) : require(`../img/cats/unknown_icon.png`)} className='icon' />
        </div>
        <div style={dateStyle}>
          {this.props.date ? this.props.date : '--/--/----'}
        </div>
      </div>
    );
  }
};

export default CatAlbumWindow;