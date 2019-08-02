import React,{Fragment} from 'react'

const DetailComponent = (props) => {



    const product = props.data;
    const {id,title,picture,price} = product
    return (
        <Fragment>

            <p>{title}</p>


            <div className="row">

                <img src={picture} alt={id} width="128" height="128"></img>

                <button
                    className="btn btn-success m-auto"

                    >Comprar
                </button>
                <p>{price.amount}</p>

            </div>

            <hr/>

        </Fragment>
    )
}

export default DetailComponent
