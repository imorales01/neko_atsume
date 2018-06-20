import React, { Component } from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 'false'
		};
	}

	render() {
		return (
			<div className="menu">
				<h1> menu </h1>
			</div>
		);
	}
};

export default Menu;