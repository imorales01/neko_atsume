import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Menu from './menu';
import HotSpotContainer from './hotspotcontainer';
import MenuInterface from './menu_interface';
import CatAlbum from './cat_album';
import CatShop from './cat_shop';

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
      menuOpen: false,
      albumOpen: false,
      shopOpen: false,
      inventoryOpen: false,
      nav: {
        ALBUM: 'album',
        SHOP: 'shop',
        INVENTORY: 'inventory'
      }
    }

    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(page){
    switch (page){
      case 'album': {
        this.setState((prevState) => ({ albumOpen: !prevState.albumOpen }));
        break;
      }
      case 'shop': {
        this.setState((prevState) => ({ shopOpen: !prevState.shopOpen }));
        break;
      }
      case 'inventory': {
        this.setState((prevState) => ({ inventoryOpen: !prevState.inventoryOpen }));
        break;
      }
    }
  }
  
  render() {
    return (
      <div className="background-image" style={yardStyle}>
        {this.state.albumOpen
          ? <CatAlbum
              togglePage={this.togglePage}
              nav={this.state.nav}
            />
          : null
        }
        {this.state.shopOpen
          ? <CatShop
            togglePage={this.togglePage}
            nav={this.state.nav}
            />
          : null
        }
        {/*inventoryOpen ? <Inventory /> : null*/}      
        <HotSpotContainer
          toggleMenu={this.toggleMenu}
          togglePage={this.togglePage}
          nav={this.state.nav}
        />
      </div>
    );
  };
}

export default Yard;