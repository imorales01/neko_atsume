import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../img/UI/TileBGs/cat_tile.png';
import Title from '../img/UI/Titles/cat_title.png';
import MenuButton from '../img/UI/img_menu.png';
import YardButton from '../img/UI/img_yard.png';
import AlbumWindowContainer from './cat_album_window_container';
import arrowLeft from '../img/UI/arrow_left.png';
import arrowRight from '../img/UI/arrow_right.png';

const catStyle = {
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
};


// TODO : CHANGE HOW ARROWS WORK
// need to call db to find count of cats and then calculate number of pages (count/4)
class CatAlbum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0
		}
		this.handleClickLeft = this.handleClickLeft.bind(this);
		this.handleClickRight = this.handleClickRight.bind(this);
	}
	handleClickRight() {
		this.setState((prevState) => ({ page: ++prevState.page }));
	}
	handleClickLeft() {
		this.setState((prevState) => ({ page: --prevState.page }));
	}
	render() {
		return (
			<div style={catStyle}>

				<Link to="/">
					<img
						className="yard-button"
						src={YardButton}
						alt="Button to go to yard"
						style={{ height: '10%', weight: '10%' }}
					/>
				</Link>

				<img src={Title} className="title" />
				{this.state.page === 0 ? null : <img
					src={arrowLeft}
					alt="Left arrow to go back a page"
					className="arrow-left"
					onClick={this.handleClickLeft}
				/>
				}

				<AlbumWindowContainer page={this.state.page} />

				{this.state.page === 1 ? null : <img
					src={arrowRight}
					alt="Right arrow to go forward a page"
					className="arrow-right"
					onClick={this.handleClickRight}
				/>
				}
			</div>
		);
	}
};

export default CatAlbum;