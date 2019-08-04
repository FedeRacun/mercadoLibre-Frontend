import React from 'react'

const BreadCrumbComponents = ({categories})=>{


    return(
        <ul>
            <div className="container">
            <li>{categories}</li>
            </div>
        </ul>
    )
}
    export default BreadCrumbComponents
