import React,{Fragment} from 'react'
import {Link} from "react-router-dom";
import shipping from '../assets/ic_shipping.png'

const ProductComponent = (datos) => {

    const {id,title,price,picture,free_shipping} = datos.datos


    return (
        <Fragment>
            <div className="productBox">
                <Link to={`/items/${id}`}>
                <img src={picture} alt={id} width="180" height="180"></img>
                </Link>
                <div className="productProps">
                    <div className="price">
                        <span> $ {price.amount}
                        <span className="decimal"> {price.decimals}</span>
                         {free_shipping ? <img className="shipping" src={shipping} alt="shipping" width="18" height="18"/> : ""}
                        </span>
                    </div>

                    <div className="tittleProduct">
                    <Link to={`/items/${id}`}>
                            <span>{title}</span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
        </Fragment>
    )
}

export default ProductComponent
