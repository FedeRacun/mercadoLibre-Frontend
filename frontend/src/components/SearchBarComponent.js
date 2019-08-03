import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

import Logo_ML from "../assets/Logo_ML.png"
import searchIcon from "../assets/ic_Search.png"

function SearchBarComponent(props) {
    const {
        onChangeCampo,
        onRedirect
    } = props
    return (
        <Fragment>
            <nav className="searchBar">
            <Link to="/">
            <img src={Logo_ML} alt="logMeli" className="mr-4" />
            </Link>
                <form className="formSearch" onSubmit={()=>onRedirect()}>
                    <input
                        name="search"
                        type="text"
                        className="form-control"
                        onChange={e=>onChangeCampo('search',e.target.value)}
                        placeholder="Nunca dejes de buscar"
                        />
                        <div className="input-group-append">
                            <button type="button" onClick={()=>onRedirect()} value="enviar" className="btn btn-outline-secondary">
                                <img src={searchIcon} alt="search"/>
                            </button>
                        </div>
                </form>
            </nav>

        </Fragment>
    )
}

export default SearchBarComponent