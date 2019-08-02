import React, { Component } from 'react'
import SearchBarComponent from '../components/SearchBarComponent'

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            search : ""
        }
        this.onChangeCampo = this.onChangeCampo.bind(this);
        this.onRedirect = this.onRedirect.bind(this);
    };

    onChangeCampo(campo,value){
        this.setState({[campo]: value})
    }

    onRedirect(){
        if(this.state.search){
        this.props.history.push(`/items?search=${this.state.search}`)
        window.location.reload();
    } return;
    }

    render() {
        return (
            <SearchBarComponent
            onChangeCampo={this.onChangeCampo}
            onRedirect={this.onRedirect}
            />
        )
    }
}
