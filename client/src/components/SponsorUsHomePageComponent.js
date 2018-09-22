import React, {Component} from 'react';
import { SPONSORSHIP_CONST } from '../constants/navbarConstants'
import { Link } from 'react-router-dom'

export default class SponsorUs extends Component {

	constructor() {
		super()
		this.state = {}
	}

	componentWillMount(){
		this.props.checkProgress()
		
	}

  render(){
    return(
      <div>
      	<h1 className="TITLE" style={{textAlign:"center"}}>
        <a href="/" style={{color:"black"}}>SPONSORSHIP</a></h1>
        <hr style={{width:"50%"}}/>
        <br/>
        <br/>
        <br/>
        <div style={{width:"50%",height:10, backgroundColor:"#d7d7d7", borderRadius:10, margin:"auto"}}>
        	<div style={{width:this.props.progress+"%", height:10, backgroundColor:"#06275b", WebkitBorderRadius: "10px 0 0 10px",
    borderRadius: "10px 0 0 10px"}}>
        	</div>
        </div>
        <div style={{width:"60%", marginLeft:"20%"}}>
        	<div style={{padding:"5px", float:"left"}}>
        		{"£50"}
        	</div>
        	<div style={{float:"right"}}>
        	{"£50000"}
        	</div>
        </div>
        <br />
        <div style={{width:"100%"}}>
        	<div  >
        	<br/>
        	<br/>
        	<br/>
            <Link to="/sponsorship">
        		<button className="btn" style={
        			{
        				textAlign:"center", 
        				marginLeft:"30%", 
        				color:"white", 
        				backgroundColor:"#272727", 
        				borderRadius:"30px",
        				padding:"10px",
        				width:"40%",
        				fontSize:20,
        				selectable:false,
        				pointer:"cursor",
        				whiteSpace:"normal"
        			}
        		}>
	        			{"HELP US MAKE IT HAPPEN"}
        		</button>
            </Link>
        	</div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
