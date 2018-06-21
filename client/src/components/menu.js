import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 'false'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState((prevState) => ({ selected: !prevState.selected }));
	}
	render() {
		return (
			<div className="menu">
				<button className="clickable" onClick={this.handleClick}>
					<h1> Menu </h1>
				</button>
			</div>
		);
	}
};

export default Menu;