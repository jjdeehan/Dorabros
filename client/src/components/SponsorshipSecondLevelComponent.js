import React, {Component} from 'react';


export default class Sponsorship extends Component {
  render(){
    return(
    	      <div>
          <br/>
        <h1 className="TITLE" style={{textAlign:"center"}}>
        <a style={{color:"black"}}>SPONSORSHIP</a></h1>
        <hr style={{width:"50%"}}/>
        <div style={{width:"100%"}}>
            <div>
                <br/>
                <br/>
      <div>
        <a>

        <button 
            className="btn " style={
            {

                textAlign:"center", 
                marginLeft:"40%", 
                color:"white", 
                backgroundColor:"#272727", 
                borderRadius:"30px",
                padding:"10px",
                width:"20%",
                fontSize:20,
                selectable:false,
                pointer:"cursor",
                whiteSpace:"normal"
            }
        }>
                {"JOIN THE 250 CLUB"}
        </button>
    </a>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <a href="https://www.gofundme.com/dorabros" target="_blank">
        <button className="btn" style={
            {
                textAlign:"center", 
                marginLeft:"40%", 
                color:"white", 
                backgroundColor:"#272727", 
                borderRadius:"30px",
                padding:"10px",
                width:"20%",
                fontSize:20,
                selectable:false,
                pointer:"cursor",
                whiteSpace:"normal"
            }
        }>
                {"GIVE WHAT YOU CAN"}
        </button>
    </a>
    </div>
    </div>
    </div>
    </div>

    )
  }
}











