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
  }
  handleClick() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }
  render() {
    //render menu or close button in corner
    //render menu interface if menu is open
    return (
      <div>
        <img src={this.state.menuOpen ? CloseButton : MenuButton} onClick={this.handleClick} style={{ height: "10%", width: "5%" }} />
        <div className='menu'>
          {this.state.menuOpen ? <MenuInterface /> : <div />}
        </div>
      </div>
    );
  }
};

export default Menu;