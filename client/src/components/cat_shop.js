import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CatShopWindowContainer from './cat_shop_window_container';
import Background from '../img/UI/TileBGs/shop_tile.png';
import CloseButton from '../img/UI/img_close.png';
import Title from '../img/UI/Titles/shop_title.png';
import MenuButton from '../img/UI/img_menu.png';
import arrowLeft from '../img/UI/arrow_left.png';
import arrowRight from '../img/UI/arrow_right.png';

const shopStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
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
	handleClickRight() {
		this.setState((prevState) => ({ page: ++prevState.page }));
	}
	handleClickLeft() {
		this.setState((prevState) => ({ page: --prevState.page }));
	}
  // TODO: refactor routing, maybe
  render() {
    return (

      <div style={shopStyle}>

        <Link to="/">
          <div style={{ position: 'absolute', zIndex: '999' }}>
            <img
              className="menu-button"
              src={CloseButton}
              alt="Close menu"
              onClick={() => { this.props.togglePage(this.props.nav.SHOP) }}
            />
          </div>
        </Link>

        <img
          src={Title}
          alt="Cat Shop title"
          className="title"
        />

        {(this.state.page === 0)
            ? null
            : <img
                src={arrowLeft}
                alt="Left arrow to go back a page"
                className="arrow-left"
                onClick={this.handleClickLeft}
              />
        }

        <CatShopWindowContainer page={this.state.page} />

        {(this.state.page === 1)
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
export default CatShop;