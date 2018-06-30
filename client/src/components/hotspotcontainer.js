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
        <div style={{position: 'absolute'}}>
        <img
          className="menu-button"
          src={this.state.menuOpen ? null : MenuButton}
          alt="Open or close menu"
          onClick={this.handleMenuClick}
          style={{ height: '10%', width: '10%' }}
        />
        </div>
        <div style={{position: 'absolute', height: '100%', width: '100%'}}>
        <HotSpot
          hotStyle={{
            position: 'relative',
            left: '4%',
            top: '36%'
          }}
        />
        </div>
        
      </div>
    );
  }
};

export default HotSpotContainer;