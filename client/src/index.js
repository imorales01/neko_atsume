import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AlbumPage from './components/album_page';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/album_page" component={AlbumPage} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));