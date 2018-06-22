import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CatShopWindowContainer from './cat_shop_window_container';
import Background from '../img/UI/TileBGs/shop_tile.png';
import YardButton from '../img/UI/img_yard.png';
import Title from '../img/UI/Titles/shop_title.png';
import MenuButton from '../img/UI/img_menu.png';
import arrowLeft from '../img/UI/arrow_left.png';
import arrowRight from '../img/UI/arrow_right.png';


const shopStyle = {
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
};

const leftArrowStyle = {
	height: "8%",
	position: "absolute",
	left: "0",
	top: "40%"
};

const rightArrowStyle = {
	height: "8%",
	position: "absolute",
	right: "0"
};

class CatShop extends Component {
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

			<div style={shopStyle}>
				
				<Link to="/">
            <img className="yard-button" src={YardButton} alt='yard button' style={{ height: "10%", weight: "10%" }} />
      	</Link>

				<img src={Title} className='title' />
				
				{this.state.page===0 ? null : <img
					src={ arrowLeft }
					style={ leftArrowStyle }
					onClick={ this.handleClickLeft }
					/>
				}

				<CatShopWindowContainer page={ this.state.page } />
				
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
export default CatShop;