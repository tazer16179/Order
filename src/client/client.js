/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

import '@babel/polyfill';
var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

import './styles/main.scss'

import './styles/semantic.less'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';
import Routes from './Routes';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, state, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
            <Redirect from="/compare-" to="/compare"/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
