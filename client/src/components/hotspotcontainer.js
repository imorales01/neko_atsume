import React, { Component } from 'react';
import HotSpot from './hotspot';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';
import fishCounterSilver from '../img/UI/sysimg_main_counter.png';
import fishCounterGold from '../img/UI/sysimg_main_counter_gold.png';

const fishStyle = {
  position: 'absolute',
  left: '1%',
  top: '92%',
  height: '7%',
}

const menuStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: '100',
}

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
  };

  render() {
    return (
      <div>
        <div style={{ position: 'absolute', zIndex: '101' }}>
          {this.state.menuOpen
            ? null
            : <img
                className="menu-button"
                src={MenuButton}
                alt="Open menu"
                onClick={this.handleMenuClick}
              />
          }
        </div>

        <div style={fishStyle}>
          <img src={fishCounterSilver} alt="Silver fish counter" />
          <img src={fishCounterGold} alt="Gold fish counter" />
        </div>

        {this.state.menuOpen
          ? <div style={menuStyle}>
              <MenuInterface
                handleMenuClick={this.handleMenuClick}
                togglePage={this.props.togglePage}
                nav={this.props.nav}
              />
            </div>
          : null
        }

        {[1, 2, 3, 4, 5, 6].map(num => {
            return (
              <div className="hotspotDiv" key={num}>
                <HotSpot number={num} />
              </div>
            );
          })
        }

      </div>
    );
  }
};

export default HotSpotContainer;
