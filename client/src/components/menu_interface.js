import React, { Component } from 'react';
import CatsButton from '../img/UI/img_cats.png';
import ShopButton from '../img/UI/img_shop.png';
import YardButton from '../img/UI/img_yard.png';
import SettingsButton from '../img/UI/img_settings.png';

class MenuInterface extends Component {
  constructor(props) {
    super(props);

    this.handleClickCats = this.handleClickCats.bind(this);
    this.handleClickShop = this.handleClickShop.bind(this);
    this.handleClickYard = this.handleClickYard.bind(this);
    this.handleClickSettings = this.handleClickSettings.bind(this);

  }
  handleClickCats() {

  }
  handleClickShop() {

  }
  handleClickYard() {

  }
  handleClickSettings() {

  }
  render() {
    //render buttons on menu
    // CatsButton -> Cats Collection
    // ShopButton -> Shop
    // YardButton -> Close menu
    // SettingsButton -> will be converted to logout
    return (
      <div>
        <table className='interface-container'>
          <img src={CatsButton} className='button' onClick={this.handleClickCats} />
          <img src={ShopButton} className='button' onClick={this.handleClickShop} />
          <br />
          <img src={YardButton} className='button' onClick={this.handleClickYard} />
          <img src={SettingsButton} className='button' onClick={this.handleClickSettings} />
        </table>
      </div>
    );
  }
};

export default MenuInterface;