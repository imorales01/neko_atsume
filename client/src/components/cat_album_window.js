import React, { Component } from 'react';
import AlbumWindowImg from '../img/UI/Windows/cat_album.png';

const windowStyle = {
	height: "20px"
};


class CatAlbumWindow extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<img src={AlbumWindowImg} style={windowStyle}/>
			</div>
		);
	}
};

export default CatAlbumWindow;