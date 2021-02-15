import React from 'react'
import Quickdisplay from './QuickDisplay'
const tripType = 'https://developerfunnel.herokuapp.com/booking'

class QuickSearch extends React.Component{
    constructor(){
        super()
        this.state={
            searchHotal:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="searchContainer">
                    <h2>Quick Search</h2>
                    <Quickdisplay mysearchHotal={this.state.searchHotal}/>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        fetch(tripType, {mathod:'Get'})
        .then((responce)=>responce.json())
        .then((data)=>{
            this.setState({searchHotal:data})
        })
    }
}

export default QuickSearch;
