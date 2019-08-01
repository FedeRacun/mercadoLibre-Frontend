import React,{Component} from 'react'
import Products from '../containers/Products'


export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };



    /*
    async componentWillMount(){
        const baseUrl = `http://localhost:4000/api/items/q=:${this.state.value}`
        const respuesta = await fetch(baseUrl);
        const resultado = await respuesta.json();
        await this.setState({resultado})
    }

    */

   render() {
        return (
            <Products props ={this.props}/>
        )
    }
}
