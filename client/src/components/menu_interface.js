import React, { Component } from 'react';
import CatsButton from '../img/UI/img_cats.png';
import ShopButton from '../img/UI/img_shop.png';
import YardButton from '../img/UI/img_yard.png';
import SettingsButton from '../img/UI/img_settings.png';
import { Link } from 'react-router-dom';
import CatAlbum from './cat_album';
import CloseButton from '../img/UI/img_close.png';

class MenuInterface extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    // TODO: refactor routing, maybe, and style buttons a little more
    // Make "go to yard" actually go to yard

    //render buttons on menu
    // CatsButton -> Cats Collection
    // ShopButton -> Shop
    // YardButton -> Close menu
    // SettingsButton -> will be converted to logout
    return (
      <div>
        <img
          className="menu-button"
          src={CloseButton}
          alt="Close menu"
          onClick={this.props.handleMenuClick}
        />
        <table className="interface-container">

          <Link to="/cat_album">
            <img
              src={CatsButton}
              alt="Button to go to Cat Album"
              className="button"
            />
          </Link>

          <Link to="/cat_shop">
            <img
              src={ShopButton}
              alt="Button to go to Cat Shop"
              className="button"
            />
          </Link>

          <br />

          <Link to="/">
            <img
              src={YardButton}
              alt="Button to go to yard"
              className="button"
            />
          </Link>

          <Link to="/">
            <img
              src={SettingsButton}
              alt="Button to go to settings" 
              className="button"
            />
          </Link>

        </table>
      </div>
    );
  }
};

export default MenuInterface;