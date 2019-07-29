import React from 'react';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//aca tengo que importar todas mis views
import HomePage from './views/HomePage/HomePage';
import SearchPage from './views/SearchPage/SearchPage';
import ProductPage from './views/ProductPage/ProductPage';
import ErrorPage from './views/ErrorPage/ErrorPage';

//borrar luego
import 'bootstrap/dist/css/bootstrap.min.css';

//hago el app un stateless con el return implicito
const App = ()=>(

  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/items" component={SearchPage} />
      <Route exact path="/items/:id" component={ProductPage} />
     <Route component={ErrorPage} />
    </Switch>
  </Router>


  );

export default App;
