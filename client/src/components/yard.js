import React, { Component } from 'react';
import Background from '../img/background.jpg';
import Menu from './menu';
import HotSpotContainer from './hotspotcontainer';
import MenuInterface from './menu_interface';


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
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  // right now, this doesnt do anything
  toggleMenu(){
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    return (
      <div className="background-image" style={yardStyle}>
        
        <HotSpotContainer toggleMenu={this.toggleMenu}/>
      </div>
    );
  };
}

export default Yard;