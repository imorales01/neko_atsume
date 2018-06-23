import React, { Component } from 'react';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';
import CloseButton from '../img/UI/img_close.png';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.showInterface = this.showInterface.bind(this);
  };

  handleClick() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  showInterface() {
    var open = this.state.menuOpen;
    if (open) {
      return (
        <MenuInterface />
      );
    }
  };

  render() {
    //render menu or close button in corner
    //render menu interface if menu is open
    return (
      <div>
        <img className='menu-button' src={this.state.menuOpen ? CloseButton : MenuButton} alt='open or close interface' onClick={this.handleClick} style={{ height: '10%', width: '10%' }} />
        {this.showInterface()}
      </div>
    );
  };

};

export default Menu;