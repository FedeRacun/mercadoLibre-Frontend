import React,{Fragment} from 'react'
import Product from './ProductComponent';
import BreadCrumbContainer from '../containers/BreadCrumb';


const ProductsListComponents = ({data,categories}) =>{



    return(
        <Fragment>

            <BreadCrumbContainer
            categories={categories}/>

        <div className="container elements">
            {data.map((datos)=>(
                <Product
                key={datos.id}
                datos={datos}
                />
                ))}
        </div>


        </Fragment>
    )
}

export default ProductsListComponents
