import React, { Component } from 'react';
import CatsButton from '../img/UI/img_cats.png';
import ShopButton from '../img/UI/img_shop.png';
import YardButton from '../img/UI/img_yard.png';
import SettingsButton from '../img/UI/img_settings.png';

class MenuInterface extends Component {
	render() {
		return (
			<div>
			<table className="interface-container">
				<img src={CatsButton} className='button'/>
				<img src={ShopButton} className='button' />
				<br />
				<img src={YardButton} className='button'/>
				<img src={SettingsButton} className='button' />
			</table>
			</div>
		);
	}
};

export default MenuInterface;