import React/* ,{useState,useEffect}*/ from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import ProductDetail from './components/ProductDetail';


function App() {
/*
  useEffect(()=>{consultarAPI()},[])


  const consultarAPI = async()=>{
    const baseUrl = 'http://localhost:4000/api/items/q=:samsung'
    const respuesta = await fetch(baseUrl);
    const resultado = await respuesta.json();
    console.log(resultado);
  }*/



  return (
    <Router>
      <SearchBar/>
      <Route path="/items/:id" exact component={ProductDetail}/>
      <Route path="/items?search=" component={ResultList}/>
    </Router>
  );
}

export default App;
