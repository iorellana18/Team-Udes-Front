require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import {store} from './store/configure';
import Home from './components/App'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Home />
        </Router>
    </Provider>, 
    document.getElementById('app')
);
