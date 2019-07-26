import React ,{Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "", redirect: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      /**  AGREGADO POR EL MIEDO */
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        let url = `/items?search=${this.state.search}`
        if (this.state.redirect) {
          return <Redirect to={url}/>
        }
      }

      /** FIN DEL MIEDO POR AHORA */

      handleChange(event) {
        this.setState({ search: event.target.value });
      }

      async handleSubmit(event) {
          event.preventDefault();
          const baseUrl = `http://localhost:4000/api/items/q=:${this.state.search}`
          const respuesta = await fetch(baseUrl);
          const resultado = await respuesta.json();
          await this.setState({resultado})
          console.log(resultado);
          this.setRedirect();
      }

      render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                {this.renderRedirect()}
                <form className="m-auto form-inline" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.handleChange}
                        className="form-control mr-sm-2"
                        />
                    <input type="submit" value="Preguntar" className="btn btn-outline-success my-2 my-sm-0"/>
                </form>
                </div>
            </nav>
        );
      }
}