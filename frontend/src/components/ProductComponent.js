import React,{Fragment} from 'react'

const ProductComponent = (datos) => {
    const product = datos.datos;
    const {id,title,price,picture} = product


    return (
        <Fragment>
            <p>{title}</p>
            <div className="row">
                <img src={picture} alt={id} width="128" height="128"></img>
                <p>{price.amount}</p><small className="ml-1">{price.decimals}</small>
                <button
                className="btn btn-success m-auto"
                >Comprar</button>
            </div>
            <hr/>
        </Fragment>
    )
}

export default ProductComponent
