import React, {Component} from 'react'
import './StyleHomePage.scss';
// traer la barra de busqueda
import SearchBar from '../../components/SearchBar/SearchBarComponent';


class HomePage extends Component{
    state ={
    }
    getResult = result =>{
        this.setState({result})
        console.log('HOME: ',result)
    }

    render(){
        return(
        <SearchBar
        getResult={this.getResult}
        history={this.props.history}
        />
        )
    }
}


export default HomePage;
