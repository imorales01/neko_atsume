import React, { Component } from 'react';
import MenuInterface from './menu_interface';
import MenuButton from '../img/UI/img_menu.png';

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
				<button className='clickable' onClick={this.handleClick}>
					<img src={MenuButton} className='button' />
				</button>
				<div className='menu'>
					{this.state.selected ? <MenuInterface/> : <div /> }
				</div>
			</div>
		);
	}
};

export default Menu;