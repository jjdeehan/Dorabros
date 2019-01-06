import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'babel-polyfill';
import store from './store.js';
import App from './app.js';
import { history } from './history'

//load main css
import 'bootstrap'
import "bootstrap/scss/bootstrap.scss";
import './public/stylesheets/index.scss';


ReactDOM.render(
  (<Provider store={store} >
    <BrowserRouter>
    	<Route path="/" component={App} />
    </BrowserRouter>
  </Provider>),
  document.getElementById('app'));
