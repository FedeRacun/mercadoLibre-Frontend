import React, {Component} from 'react'

import SearchBar from '../../components/SearchBar/SearchBarComponent';


class SearchPage extends Component{
    state ={

    }

    getResult = result =>{
        console.log('Search Pag: ',result);
    }


    render(){
        return(
        <div>
            <SearchBar
            getResult={this.getResult}
            history={this.props.history}
            />
            <h1>SearchPage</h1>
        </div>

        )
    }
}
/*
const SearchPage = (props) => {

    function getResult(result){
        console.log('SearchPage: ',result);
    }

    return(
    )
};
*/
export default SearchPage
