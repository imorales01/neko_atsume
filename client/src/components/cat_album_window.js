import React, { Component } from 'react';
import AlbumWindowImg from '../img/UI/Windows/cat_album.png';

// hard code height for now, depending on how big window container will be
const windowStyle = {
	height: "250px",
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