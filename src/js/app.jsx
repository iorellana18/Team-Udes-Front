require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/App'

import 'element-theme-default';

ReactDOM.render(
        <Router>
            <Home />
        </Router>,
    document.getElementById('app')
);
