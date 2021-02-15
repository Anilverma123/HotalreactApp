import React from 'react'
import axios from 'axios' 
import ListingDataHotal from './ListingDisplay'
import Roomfilter from '../Filter/RoomFilter'
import PriceFilter from '../Filter/PriceFilter'
const url = "https://developerfunnel.herokuapp.com/hotellist";


class ListingData extends React.Component{
    constructor(){
        super()
        this.state={
            hotaldisplay:''
        }
    }

    setDataAsPerFilter=(sortedData)=>{
        console.log(sortedData)
        this.setState({hotaldisplay:sortedData})
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'> <Roomfilter roomPerType={(data)=>{this.setDataAsPerFilter(data)}}/>
                    <div><PriceFilter roomPerCost={(data)=>{this.setDataAsPerFilter(data)}}/></div>
                    </div>
                    <div className='col-md-10'>
                    <ListingDataHotal hotellist={this.state.hotaldisplay}/>
                    
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount(){
        const getId = this.props.match.params.id;
        sessionStorage.setItem('tripid',getId)
        axios.get(`${url}/${getId}`)
        .then((resp)=>{this.setState({hotaldisplay:resp.data})})
    }
}

export default ListingData