import React, { Component } from 'react';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';
import CloseButton from '../img/UI/img_close.png';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState((prevState) => ({ selected: !prevState.selected }));
	}
	render() {
		return (
			<div>
				<img src={this.state.selected ? CloseButton : MenuButton} onClick={this.handleClick} style={{ height: "10%", width: "5%" }}/>
				<div className='menu'>
					{this.state.selected ? <MenuInterface/> : <div /> }
				</div>
			</div>
		);
	}
};

export default Menu;