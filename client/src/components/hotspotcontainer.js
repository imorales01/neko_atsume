import React, { Component } from 'react';
import HotSpot from './hotspot';
import MenuButton from '../img/UI/img_menu.png';


class HotSpotContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
    this.props.toggleMenu();
  };

  render() {
    // TODO: px -> % and add more hot spots
    return (
      <div style={{ height: '100%' }}>
        <img
          className="menu-button"
          src={this.state.menuOpen ? null : MenuButton}
          alt="Open or close menu"
          onClick={this.handleMenuClick}
          style={{ height: '10%', width: '10%' }}
        />
        <HotSpot
          paddingLeft="6%"
          paddingTop="17%"
        />
        
      </div>
    );
  }
};

export default HotSpotContainer;