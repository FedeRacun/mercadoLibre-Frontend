import React, {Component,Fragment} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import routes from "./routes";
import SearchBar from './containers/SearchBar';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
};

  render() {
    // El searchbar es independiente de las vistas asi puedo mostrarlo todo el tiempo, pero necesito
    //aplicarle el withRouter para poder
    const Header = withRouter(SearchBar)

    //Siempre se va a mostrar el Searchbar y por debajo se van a renderizar las rutas
    return (
      <Fragment>
        <Header/>
          <div className="bodyContainer">
            <Switch>
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
          </div>
    </Fragment>
    )
  }
}

export default App
