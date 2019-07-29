import React, { Component } from 'react'
import {  BrowserRouter as Router, Route} from 'react-router-dom'
//aca tengo que importar todas mis views
import SearchBarComponent from './components/SearchBar/SearchBarComponent'
//import HomePage from './views/HomePage/HomePage';
import SearchPage from './views/SearchPage/SearchPage';
import ProductPage from './views/ProductPage/ProductPage';

//borrar luego
import 'bootstrap/dist/css/bootstrap.min.css';

//hago el app un stateless con el return implicito


export default class App extends Component {

  state = {
    data : {}
}

  getResults = data =>{
    this.setState({data})
  }
  render() {
    return (
      <Router>
      <Route path="/" render ={(props)=><SearchBarComponent {...props} getResults = {this.getResults} />}/>
      <Route exact path="/items" render = { () => <SearchPage sendResults = {this.state.data} />}/>
      <Route exact path="/items/:id" component={ProductPage} />
  </Router>
    )
  }
}