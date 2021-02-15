import React from 'react'
import QuickSearch from './QuickSearch'
import './home.css'
import hotalDetails from '../Details/HotalDetails'

const curl = 'https://developerfunnel.herokuapp.com/location'
const hurl = 'https://developerfunnel.herokuapp.com/hotels?city='

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            location:'',
            Hotal:''
        }
    }
    displaycity=(data)=>{
        if(data){
            return data.map((data)=>{
                return(
                    <option value={data.city}>
                    {data.city_name}
                    </option>
                )
    
            })
        }
    }
    SelectHotal=(event)=>{
        console.log( this.props.history.push(`/details/${event.target.value}`))
      // console.log(this.props.history.push(`/details/${event.target.value}`)) 
     
    }
    displayHotal=(data)=>{
        if(data){
            return data.map((data)=>{
                return(
                    <option value={data.city}>
                    {data.name} | {data.city_name}
                    </option>
                )
    
            })
        }
    }

    changeCity=(event)=>{
       const cityID= event.target.value
        fetch(`${hurl}${cityID}`, {mathod:'GET'})
        .then((resp)=>resp.json())
        .then((data)=>{
            this.setState({Hotal:data})
        })

    }
    render(){
        return(
            <React.Fragment>
            <div className='container'>
                <div className='homesearch'>
                    <select className='spaceR' onChange={this.changeCity}>
                        <option>--Select City----</option>
                        {this.displaycity(this.state.location)}
                    </select>

                    <select onChange={this.SelectHotal}>
                        <option>--Select Hotal----</option>
                       {this.displayHotal(this.state.Hotal)}
                       
                    </select>

                </div>
                <QuickSearch/>
                </div>
                
            </React.Fragment>
        )
    }
    componentDidMount(){
        fetch(curl, {mathod:'GET'})
        .then((response) => response.json())
        .then((data)=>{
            this.setState({location:data})
        })    
    }
}

export default Home