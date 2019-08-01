import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

function SearchBarComponent(props) {
    const {
        onChangeCampo,
        onRedirect
    } = props
    //width="128" height="128"
    return (
        <Fragment>
            <nav className="searchBar">
            <Link to="/">
            <img src="https://centroapi.com.ar/wp-content/uploads/2018/07/osde_logo.png" alt="jose" width="128" height="40" className="mr-4"></img>
            </Link>

                <form className="formSearch" onSubmit={()=>onRedirect()}>
                    <input
                        name="search"
                        type="text"
                        className="form-control mr-sm-2"
                        onChange={e=>onChangeCampo('search',e.target.value)}
                        />
                    <input type="button" onClick={()=>onRedirect()} value="enviar" className="btn btn-outline-dark my-2 my-sm-0"/>
                </form>
            </nav>

        </Fragment>
    )
}

export default SearchBarComponent
