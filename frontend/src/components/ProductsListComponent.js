import React,{Fragment} from 'react'
import Product from './ProductComponent';


const ProductsListComponents = ({data}) =>{

    return(
        <Fragment>
            {data.map((datos)=>(
            <Product
            key={datos.id}
            datos={datos}
            />
            ))}


        </Fragment>
    )
}

export default ProductsListComponents
