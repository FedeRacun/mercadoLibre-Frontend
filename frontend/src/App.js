import React/* ,{useState,useEffect}*/ from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchBar from './views/header/SearchBar';
import ResultList from './views/body//results/ResultList';
import ProductDetail from './views/body/product/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <SearchBar/>
      <Route path="/items/:id" exact component={ProductDetail}/>
      <Route path="/items" search="?search=:query" exact component={ResultList}/>
    </Router>
  );

}

export default App;
