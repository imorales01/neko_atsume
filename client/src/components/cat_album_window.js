import React, { Component } from 'react';
import AlbumWindowImg from '../img/UI/Windows/cat_album.png';

const windowStyle = {
  backgroundImage: `url(${AlbumWindowImg})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  height: '100%',
  width: '100%'
};

const dateStyle = {
  position: 'relative',
  fontFamily: 'arial',
  textAlign: 'center',
  top: '14%',
  height: '8%'
};

class CatAlbumWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let namePath = this.props.catData[0].name;
    // FIXME: dont hardcode this lol 
    if (namePath === 'Sassy Fran') {
      namePath = 'Sassy_Fran';
    }
    else if (namePath === 'Saint Purrtrick') {
      namePath = 'Saint_Purrtrick';
    }

    return (
      <div style={windowStyle}>
        <div className="name" style={{ top: '11%' }}>
          {this.props.date ? this.props.catData[0].name : '? ? ? ?'}
          <br />
          <img
            src={(this.props.date)
                    ? require(`../img/cats/${namePath}/icon.png`)
                    : require(`../img/cats/unknown_icon.png`)}
            className="icon"
          />
        </div>
        <div style={dateStyle}>
          {this.props.date ? this.props.date : '--/--/----'}
        </div>
      </div>
    );
  }
};

export default CatAlbumWindow;