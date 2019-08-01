import React,{Fragment} from 'react'

function SearchBarComponent(props) {
    const {
        onChangeCampo,
        onRedirect
    } = props
    return (
        <Fragment>

            <nav className="searchBar">
                <form className="formSearch" onSubmit={()=>onRedirect()}>
                    <input
                        name="search"
                        type="text"
                        className="form-control mr-sm-2"
                        onChange={e=>onChangeCampo('search',e.target.value)}
                        />
                    <input type="button" onClick={()=>onRedirect()} value="Buscar" className="btn btn-outline-dark my-2 my-sm-0"/>
                </form>
            </nav>

        </Fragment>
    )
}

export default SearchBarComponent
