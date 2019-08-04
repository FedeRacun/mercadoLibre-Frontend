import React, {Component,Fragment} from 'react';
import ProductsListComponent from '../components/ProductsListComponent';
import LoadingProducts from '../views/LoadingProducts';
import NotFound from '../views/NotFoundPag';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            categories: null
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
            categories : data.categories,
            search : value
        });
    }
    render() {

//Esto eran 3 "if" pero quedaba horrible
        switch (true) {
            case this.state.data === '':
                return  <NotFound />

            case this.state.data !== null :
                return <Fragment>
                    <ProductsListComponent
                    props = {this.props.props}
                    data = {this.state.data}
                    categories={this.state.categories}
                    />
                </Fragment>

            default:
                return <LoadingProducts />
        }
    }
}

export default Products