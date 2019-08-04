import React from 'react'

const BreadCrumbComponents = ({categories})=>{
    return(
    <div className="container breadcrumb">
        <ul>
            <li>{categories}</li>
        </ul>
    </div>
    )
}
    export default BreadCrumbComponents
