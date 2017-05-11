import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,browserHistory} from "react-router"
import Promise from "redux-promise"

import Routes from "./router"
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>
    , document.querySelector('.all-content-wrapper'));
