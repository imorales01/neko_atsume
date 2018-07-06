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
      inventoryOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.openPage = this.openPage.bind(this);
  }
  // right now, this doesnt do anything
  toggleMenu(){
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  openPage(page){
    this.setState((prevState) => ({ page: !prevState.page }));
  }

  render() {
    return (
      <div className="background-image" style={yardStyle}>
        {albumOpen ? <CatAlbum /> : null}
        {shopOpen ? <CatShop /> : null}
        {/*inventoryOpen ? <Inventory /> : null*/}      
        <HotSpotContainer toggleMenu={this.toggleMenu} openPage={this.openPage}/>
      </div>
    );
  };
}

export default Yard;