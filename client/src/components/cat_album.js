import React, { Component } from 'react';
import Background from '../img/UI/TileBGs/cat_tile.png';
import Title from '../img/UI/Titles/cat_title.png';
import MenuButton from '../img/UI/img_menu.png';
import AlbumWindowContainer from './cat_album_window_container';
import arrowLeft from '../img/UI/arrow_left.png';
import arrowRight from '../img/UI/arrow_right.png';

const catStyle = {
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
};

const leftArrowStyle = {
	height: "8%",
	position: "relative",
	top: "50%"
};

const rightArrowStyle = {
	height: "8%",
	position: "absolute",
	right: "0"
};

class CatAlbum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0
		}
		this.handleClickLeft = this.handleClickLeft.bind(this);
		this.handleClickRight = this.handleClickRight.bind(this);
	}
	// todo : handle multiple pages and compress into one function
	handleClickRight(){
		this.setState(() => ({ page: 1 }));
	}
	handleClickLeft(){
		this.setState(() => ({ page: 0 }));
	}
	render() {
		return (
			<div style={catStyle}>
				<img src={MenuButton} onClick={() => { }} style={{ height: "10%", width: "5%" }} />
				<img src={Title} className='title' />
				{this.state.page===0 ? null : <img
					src={ arrowLeft }
					style={ leftArrowStyle }
					onClick={ this.handleClickLeft }
					/>
				}

				<AlbumWindowContainer page={this.state.page} />
				
				{this.state.page===1 ? null : <img
					src={ arrowRight }
					style={ rightArrowStyle }
					onClick={ this.handleClickRight }
					/>
				}
			</div>
		);
	}
};

export default CatAlbum;