import React,{Fragment} from 'react'

const DetailComponent = (props) => {

    const {id,title,picture,price,description,sold_quantity,condition} =  props.data

    return (
        <Fragment>
            <div className="container elements detail">
                <div className="detailBox">

                    <div className="imgContainer">
                        <img src={picture} alt={id} width="680" height="680" />
                    </div>

                    <div className="productProps">

                        <div className="condition ">

                        <span>
                            {condition === "new" ? "Nuevo " : "Usado "} -
                        </span>
                        <span>{" "+ sold_quantity + " "} <small>vendidos</small></span>
                        </div>


                        <div className="tittleProduct">
                            <span>{title}</span>
                        </div>

                    <div className="price">
                        <span>$ {price.amount}</span>
                        <span className="decimal">{price.decimals}</span>
                    </div>
                    <div className="buy">
                        <button className="btn">comprar</button>
                    </div>

                    </div>
                </div>

                <hr/>

                <div className="description">
                    <div className="titleDesc">
                        <span>Descripcion del producto</span>
                    </div>
                    <div className="textDesc">
                        <span>{description}</span>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default DetailComponent