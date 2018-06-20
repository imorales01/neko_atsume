import React, { Component } from 'react';
import Background from '../images/background.jpg';
import Menu from './menu';

var yardStyle = {
	margin: '0',
	height: '100%',
	width: '100%',
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
};

class Yard extends Component {
	render() {
		return (
			<div className='background-image' style={yardStyle}>
				<Menu />
			</div>
		);
	}
};

export default Yard;