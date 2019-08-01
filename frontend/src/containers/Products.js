import React, {Component,Fragment} from 'react'
import ProductsListComponent from '../components/ProductsListComponent'

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categories: []
        };
    };

    async componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const search = this.props.props.location.search;
        let value = search.split("=")[1];
        const baseUrl = `http://localhost:4000/api/items/q=:${value}`
        const respuesta = await fetch(baseUrl);
        const data = await respuesta.json();
        this.setState({
            data: data.items,
            categories : data.categories
        })
    }
    render() {
        //<button className="btn btn-primary" onClick={()=>console.log(props.history.push(`/items/${valor}`) )}> VER PRODUCTOVICH</button>
        return (
            <Fragment>
                <ProductsListComponent
                props = {this.props.props}
                data = {this.state.data}
                categories={this.state.categories}
                />
            </Fragment>
        )
    }
}

export default Products