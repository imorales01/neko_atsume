import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AlbumPage from './components/album_page';
import CatAlbumWindow from './components/cat_album_window';
import CatAlbumWindowContainer from './components/cat_album_window_container';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/cat_album_window_container" component={CatAlbumWindowContainer} />
        <Route path="/cat_album_window" component={CatAlbumWindow} />
        <Route path="/album_page" component={AlbumPage} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));