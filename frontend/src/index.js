import React, {Fragment} from 'react';
import {render}  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';

import './index.scss';

render(
    //Aplico el Router sobre mi app para poder acceder a las propiedades de history en todas las vistas
    <Router>

    <Fragment>
        <App />
    </Fragment>

    </Router>,
    document.getElementById('root')
);
