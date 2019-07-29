import React ,{Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          resultado: ""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({ value: event.target.value });
      }

      async handleSubmit(event) {
          event.preventDefault();
          const baseUrl = `http://localhost:4000/api/items/q=:${this.state.value}`
          const respuesta = await fetch(baseUrl);
          const resultado = await respuesta.json();
          await this.setState({resultado})
          this.props.history.push(`/items?search=${this.state.value}`);
        this.props.getResults(this.state.resultado);
        }

      render() {
        return (
            <nav className="searchBar">
                <form className="formSearch" onSubmit={this.handleSubmit}>
                    <input
                        name="search"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="form-control mr-sm-2"
                        />
                    <input type="submit" value="Preguntar" className="btn btn-outline-dark my-2 my-sm-0"/>
                </form>
            </nav>
        );
      }
}