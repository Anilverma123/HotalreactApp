import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home/Home'
import {BrowserRouter,Route} from 'react-router-dom';
import ListingApi from './Listing/ListingApi'
import HotalDetails from './Details/HotalDetails';
import BookingDisplay from '../component/Booking/BookingDisplaydata'
import ViewBooking from '../component/Booking/BookingDisplay'

const App =()=>{
    return(
        <React.Fragment>
            <Header/>
           
            <Footer/>
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route exact path="/list/:id"  component={ListingApi}/>
                <Route path="/details/:id"  component={HotalDetails}/>
                <Route path="/Booking/:hotal_name" component={BookingDisplay}/>
                <Route path="/viewBooking" component={ViewBooking}/>
            </BrowserRouter>
        </React.Fragment>
       
           
       
  
    )
}

export default App;