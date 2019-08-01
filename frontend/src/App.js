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
    const Header = withRouter(SearchBar)
    return (
      <Fragment>
        <Header/>
          <div className="container piola">
            <Switch>
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
          </div>
    </Fragment>
    )
  }
}

export default App
