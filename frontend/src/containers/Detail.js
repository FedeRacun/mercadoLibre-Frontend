import React, { Component, Fragment } from 'react'
import DetailComponent from '../components/DetailComponent'

export class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data : null,
             
        }
    }

    componentDidMount(){
        this.getDetail();
    }

    getDetail = async () =>{
        const param = this.props.props.location.pathname;
        let id = param.slice(7,param.length);
        const baseUrl = `http://localhost:4000/api/items/${id}`;
        const respuesta = await fetch(baseUrl);
        const data = await respuesta.json();
        this.setState({
            data : data.items,
        })


    }
    
    render() {
    
        if(this.state.data){
            return (
                <Fragment>
                    <DetailComponent 
                        data={this.state.data}
                        />

                </Fragment>
            )
        }
        return <h1>cargando...</h1>
    }
}

export default Detail
