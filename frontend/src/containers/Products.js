import React, {Component,Fragment} from 'react'
import ProductsListComponent from '../components/ProductsListComponent'
import NotFound from '../views/NotFoundPag'

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

        if(this.state.data === ''){
            return <NotFound />
        }if(this.state.data !== null){
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
    return <p>Cargando...</p>
    }
}

export default Products