import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router>
        <App history={history} />
    </Router>,
    document.getElementById('root')
);