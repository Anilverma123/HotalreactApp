import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:8000/booking";

class ViewBooking extends Component{
    constructor(){
        super()

        this.state={
            bookingData:''
    
        }
    }

    
    render(){
       
        return(
            <div>
                <BookingDisplay bookdata={this.state.bookingData}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) => {this.setState({bookingData:res.data})} )
    }
}

export default ViewBooking