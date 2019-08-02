import React,{Component} from 'react'
import Products from '../containers/Products'


export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

   render() {
        return (
            <Products props ={this.props}/>
        )
    }
}
