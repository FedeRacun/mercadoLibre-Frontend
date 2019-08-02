import React from 'react';
import {render}  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import './index.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Router>
    <div className="breadCrumb">
        <App />
    </div>
    </Router>,
    document.getElementById('root')
);
