import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url ='https://developerfunnel.herokuapp.com/hotelsdetails'

class HotalDetail extends React.Component{

    constructor(){
        super()
        this.state={
            details:'',
            tripeHotalId:sessionStorage.getItem('tripeId')

        }
    }

    render(){
        let {details} = this.state
        return(
            <div className='container'>
               <div className='panel panel-primary'>
                   <div className='panel panel-heading'>
                    <h3>{details.name}</h3>
                   </div>
                   <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                    </div>   
                    <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>About this Place</h2>
                                    <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Us</h2>
                                    <h3>Ph No:987655765765</h3>
                                </TabPanel>
                                
                            </Tabs>
                        </div>
                        <br/>
                        <Link to={`/list/${this.state.tripeHotalId}`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to="/Booking/${details.name}" className="btn btn-success">Place Booking</Link> 
               </div>
            </div>
        )
    }
    async componentDidMount(){
        let gettId = this.props.match.params.id
        let responce = await axios.get(`${url}/${gettId}`);
        this.setState({details:responce.data[0]})
    }


}

export default HotalDetail