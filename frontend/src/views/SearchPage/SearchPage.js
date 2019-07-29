import React, {Component} from 'react'


class SearchPage extends Component{
    constructor(props) {
        super(props);
    this.state ={
    };
}

    

    render(){
        return(
        <div>
            <h1>SearchPage {console.log('React es Asombroso: ',this.props.sendResults)}</h1>
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
