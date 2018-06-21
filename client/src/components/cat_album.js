import React, { Component } from 'react';
import Background from '../img/UI/TileBGs/cat_tile.png';
import Title from '../img/UI/Titles/cat_title.png';
import MenuButton from '../img/UI/img_menu.png';

const catStyle = {
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
  };

class CatAlbum extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div style={catStyle}>
				<img src={MenuButton} onClick={ () => {} } style={{ height: "10%", width: "5%" }} />
				<img src={Title} className='title' />
			</div>
		);
	}
};

export default CatAlbum;