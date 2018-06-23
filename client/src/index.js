import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CatAlbum from './components/cat_album';
import CatShop from './components/cat_shop';
import CatAlbumWindow from './components/cat_album_window';
import CatAlbumWindowContainer from './components/cat_album_window_container';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/cat_album_window_container' component={CatAlbumWindowContainer} />
        <Route path='/cat_album_window' component={CatAlbumWindow} />
        <Route path='/cat_shop' component={CatShop} />
        <Route path='/cat_album' component={CatAlbum} />
        <Route path='/' component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));