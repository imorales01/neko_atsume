import React, { Component } from 'react';
import HotSpot from './hotspot';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';
import fishCounterSilver from '../img/UI/sysimg_main_counter.png';
import fishCounterGold from '../img/UI/sysimg_main_counter_gold.png';

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
      <div style={{ height: '13%'}}>

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

        <div style={{ position: 'absolute', left: '1%', top: '92%', height: '7%'}}>
          <img src={fishCounterSilver} alt="Silver fish counter" />
          <img src={fishCounterGold} alt="Gold fish counter" />
        </div>


        {this.state.menuOpen
          ? <div style={{ position: 'absolute', height: '100%' , width: '100%', zIndex: '100'}}>
              <MenuInterface
                handleMenuClick={this.handleMenuClick}
                togglePage={this.props.togglePage}
                nav={this.props.nav}
              />
            </div>
          : null
        }

        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '4%',
              top: '36%',
              zIndex: '2'
            }}
            catStyle={{
              position: 'relative',
              left: '7%',
              top: '8%',
              zIndex: '2'
            }}
            number="1"
          />
        </div>

        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <HotSpot
            hotStyle={{
              position: 'relative',
              left: '3%',
              top: '65%',
              zIndex: '1'
            }}
            catStyle={{
              position: 'relative',
              left: '6%',
              top: '36%',
              zIndex: '1'
            }}
            number="2"
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
            catStyle={{
              position: 'relative',
              left: '35%',
              top: '45%',
              zIndex: '3'
            }}
            number="3"
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
            catStyle={{
              position: 'relative',
              left: '68%',
              top: '23%',
              zIndex: '4'
            }}
            number="4"
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
            catStyle={{
              position: 'relative',
              left: '78%',
              bottom: '7%',
              zIndex: '5'
            }}
            number="5"
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
            catStyle={{
              position: 'relative',
              left: '80%',
              top: '55%',
              zIndex: '6'
            }}
            number="6"
          />
        </div>
        
      </div>
    );
  }
};

export default HotSpotContainer;
