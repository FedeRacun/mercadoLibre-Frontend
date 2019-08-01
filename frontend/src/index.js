import React from 'react';
import {render}  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Helmet from 'react-helmet';
import App from './App';
import './index.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Router>
    <Helmet bodyAttributes={{style: 'background-color : #EEEEEE'}}/>
    <div className="breadCrumb">
        <App />
    </div>
    </Router>,
    document.getElementById('root')
);
