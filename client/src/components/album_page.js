import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CloseButton from '../img/UI/img_close.png';

import WindowContainer from './window_container';

import arrowLeft from '../img/UI/arrow_left.png';
import arrowRight from '../img/UI/arrow_right.png';

import AlbumBackground from '../img/UI/TileBGs/cat_tile.png';
import AlbumTitle from '../img/UI/Titles/cat_title.png';

import ShopTitle from '../img/UI/Titles/shop_title.png';
import ShopBackground from '../img/UI/TileBGs/shop_tile.png';

// TODO : CHANGE HOW ARROWS WORK
// need to call db to find count of cats and then calculate number of pages (count/4)
class AlbumPage extends Component {
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

  // TODO: refactor routing, maybe
	render() {
    let background;
    let title;
		switch(this.props.type) {
			case 'Album':
        background = AlbumBackground;
        title = AlbumTitle;
				break;
			case 'Shop':
        background = ShopBackground;
        title = ShopTitle;
        break;
      default:
      case 'Inventory':
        background = null;
        title = null;
				break;
		}
	
		return (
			<div style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
      }}>

				<Link to="/">
					<div style={{ position: 'absolute' }}>
					<img
						className="menu-button"
						src={CloseButton}
						alt="Close menu"
            onClick={() => {
              this.props.togglePage(
                this.props.nav[this.props.type.toUpperCase()]
              );
            }}
          />
					</div>
				</Link>

				<img
          src={title}
          alt={`${this.props.type} title`}
          className="title"
        />

				{this.state.page === 0
          ? null
          : <img
              src={arrowLeft}
              alt="Left arrow to go back a page"
              className="arrow-left"
              onClick={this.handleClickLeft}
            />
				}

				<WindowContainer page={this.state.page} type={this.props.type}/>

				{this.state.page === 1
          ? null
          : <img
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

export default AlbumPage;
