import React,{Fragment} from 'react'

const DetailComponent = (props) => {

    const {id,title,picture,price,description} =  props.data

    return (
        <Fragment>
            <div className="container elements">
            <h1>{title}</h1>
                <img src={picture} alt={id} width="680" height="680" />
                <h3>{price.amount}</h3> <small>{price.decimals}</small>
                <button className="btn btn-block btn-primary">comprar</button>

            <hr/>

            <p>{description}</p>
            </div>
        </Fragment>
    )
}

export default DetailComponent