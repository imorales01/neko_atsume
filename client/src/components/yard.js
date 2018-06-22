import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Menu from './menu';
import HotSpotContainer from './hotspotcontainer';
import CatAlbum from './cat_album';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';
import CloseButton from '../img/UI/img_close.png';

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
  constructor(props){
    super(props);

    this.state = {
      menuOpen: false
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.showInterface = this.showInterface.bind(this);
  }

  handleMenuClick() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  showInterface() {
    var open = this.state.menuOpen;
    if(open) {
      return (
          <MenuInterface />
      );
    }
  };

  render() {
    return (
      <div className='background-image' style={yardStyle}>
      <img className='menu-button' src={ this.state.menuOpen ? CloseButton : MenuButton } alt='open or close interface' onClick={this.handleMenuClick} style={{ height: "10%", width: "10%" }} />
      { this.state.menuOpen ? <MenuInterface /> : <HotSpotContainer /> }
        
      </div>
    );
    // testing purposes:
    //return <CatAlbum />;
  }
};

export default Yard;