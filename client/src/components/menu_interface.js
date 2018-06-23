import React, { Component } from 'react';
import CatsButton from '../img/UI/img_cats.png';
import ShopButton from '../img/UI/img_shop.png';
import YardButton from '../img/UI/img_yard.png';
import SettingsButton from '../img/UI/img_settings.png';
import { Link } from 'react-router-dom';
import CatAlbum from './cat_album';

class MenuInterface extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    //render buttons on menu
    // CatsButton -> Cats Collection
    // ShopButton -> Shop
    // YardButton -> Close menu
    // SettingsButton -> will be converted to logout
    return (
      <table className='interface-container'>

        <Link to='/cat_album'>
          <img src={CatsButton} alt='cats button' className='button' />
        </Link>

        <Link to='/cat_shop'>
          <img src={ShopButton} alt='shop button' className='button' />
        </Link>

        <br />

        <Link to='/'>
          <img src={YardButton} alt='yard button' className='button' />
        </Link>

        <Link to='/'>
          <img src={SettingsButton} alt='settings button' className='button' />
        </Link>

      </table>
    );
  }
};

export default MenuInterface;