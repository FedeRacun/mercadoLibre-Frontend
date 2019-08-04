import React from 'react';
import {render}  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';

import './index.scss';

//borrar
//import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Router>
    <div>
        <App />
    </div>
    </Router>,
    document.getElementById('root')
);
