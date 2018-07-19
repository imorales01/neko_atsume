import React, { Component } from 'react';
import CatsButton from '../img/UI/img_cats.png';
import ShopButton from '../img/UI/img_shop.png';
import YardButton from '../img/UI/img_yard.png';
import SettingsButton from '../img/UI/img_settings.png';
import CatAlbum from './cat_album';
import CloseButton from '../img/UI/img_close.png';

class MenuInterface extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    // CatsButton -> Cats Collection
    // ShopButton -> Shop
    // YardButton -> Close menu
    // SettingsButton -> will be converted to logout
    return (
      <div>
      
      <div style={{ position: 'absolute' }}>
      <img
          className="menu-button"
          src={CloseButton}
          alt="Close menu"
          onClick={this.props.handleMenuClick}
      />
      </div>
        <table className="interface-container">

          <img
            src={CatsButton}
            alt="Button to go to Cat Album"
            className="button"
            onClick={() => {this.props.togglePage(this.props.nav.ALBUM)}}
          />

          <img
            src={ShopButton}
            alt="Button to go to Cat Shop"
            className="button"
            onClick={() => {this.props.togglePage(this.props.nav.SHOP)}}
          />

          <br />

          <img
            src={YardButton}
            alt="Button to go to yard"
            className="button"
            onClick={this.props.handleMenuClick}
          />

          <img
            src={SettingsButton}
            alt="Button to go to settings" 
            className="button"
          />

        </table>
      </div>
    );
  }
};

export default MenuInterface;