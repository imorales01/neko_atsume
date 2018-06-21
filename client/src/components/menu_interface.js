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

  };

  handleClickShop() {

  };

  handleClickYard() {

  };

  handleClickSettings() {

  };

  render() {
    //render buttons on menu
    // CatsButton -> Cats Collection
    // ShopButton -> Shop
    // YardButton -> Close menu
    // SettingsButton -> will be converted to logout
    return (
        <table className='interface-container'>
          <img src={CatsButton} alt='cats button' className='button' onClick={this.handleClickCats} />
          <img src={ShopButton} alt='shop button' className='button' onClick={this.handleClickShop} />
          <br />
          <img src={YardButton} alt='yard button' className='button' onClick={this.handleClickYard} />
          <img src={SettingsButton} alt='settings button' className='button' onClick={this.handleClickSettings} />
        </table>
    );
  }
};

export default MenuInterface;