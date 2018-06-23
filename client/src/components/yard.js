import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Menu from './menu';
import HotSpotContainer from './hotspotcontainer';
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
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    return (
      <div className="background-image" style={yardStyle}>
        <img
          className="menu-button"
          src={this.state.menuOpen ? CloseButton : MenuButton}
          alt="Open or close menu"
          onClick={this.handleMenuClick}
          style={{ height: '10%', width: '10%' }}
        />
        {this.state.menuOpen ? <MenuInterface /> : <HotSpotContainer />}
      </div>
    );
  };
}

export default Yard;