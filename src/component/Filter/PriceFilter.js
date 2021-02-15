import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{
    filterRoom = (event) => {
        let cost =(event.target.value).split(',');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        
        let tripId = sessionStorage.getItem('tripid');
        console.log(tripId)
        if(cost==''){
                costUrl =`${rurl}/${tripId}`
        }else{
                costUrl = `${rurl}/${tripId}?hcost=${hcost}&lcost=${lcost}`
           //onsole.log(roomurl)
        }
        axios.get(costUrl)
        .then((response) => {this.props.roomPerCost(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <h5><b>Room Type</b></h5>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000 To 3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,5000" name="room"/>3001 To 5000
                    </label>
                    <label className="radio">
                        <input type="radio" value="5001,6000" name="room"/>5001 To 6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,8000" name="room"/>6001 To 8000
                    </label>
                    <label className="radio">
                        <input type="radio" value="8001,10000" name="room"/>8001 To 10000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;