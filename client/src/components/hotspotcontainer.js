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

        <div style={{ position: 'absolute' }}>
          <img
            className="menu-button"
            src={this.state.menuOpen ? null : MenuButton}
            alt="Open or close menu"
            onClick={this.handleMenuClick}
            style={{ height: '10%', width: '10%' }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '4%',
              top: '36%',
              zIndex: '1'
            }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '3%',
              top: '65%',
              zIndex: '3'
            }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '35%',
              top: '72%',
              zIndex: '3'
            }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '65%',
              top: '50%',
              zIndex: '4'
            }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '75%',
              top: '22%',
              zIndex: '5'
            }}
          />
        </div>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '75%',
              top: '84%',
              zIndex: '6'
            }}
          />
        </div>
      </div>
    );
  }
};

export default HotSpotContainer;