import React,{Fragment} from 'react'

const ProductComponent = (datos) => {

    const {id,title,price,picture} = datos.datos


    return (
        <Fragment>
            <a href={`/items/${id}`}>
            <p>{title}</p>
            </a>
                <img src={picture} alt={id} width="180" height="180"></img>
                <p>{price.amount}</p><small>{price.decimals}</small>
            <hr/>
        </Fragment>
    )
}

export default ProductComponent
