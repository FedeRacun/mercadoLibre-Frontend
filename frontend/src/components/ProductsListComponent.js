import React,{Fragment} from 'react'
import Product from './ProductComponent';
import BreadCrumbContainer from '../containers/BreadCrumb';


const ProductsListComponents = ({data,props,categories}) =>{


    const onRedirect = (id) =>{
        props.history.push(`/items/${id}`)
    }
    
    return(
        <Fragment>

            <BreadCrumbContainer
            categories={categories}/>
        
            {data.map((datos)=>(
                <Product
                key={datos.id}
                datos={datos}
                onRedirect={onRedirect}
                />
                ))}


        </Fragment>
    )
}

export default ProductsListComponents
