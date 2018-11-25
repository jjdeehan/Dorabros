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
        <a href="/" style={{color:"black"}}>SPONSOR US</a></h1>
        <hr style={{width:"50%"}}/>
        <div style={{width:"50%", margin:"auto"}}>
<form  action="https://www.paypal.com/cgi-bin/webscr" method="post" style={{backgroundColor:"white"}} target="_blank">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
"/>
<button className="clearButton" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" style={{width:"100%", cursor:"pointer"}}><img 
style={
                        {
                            textAlign:"center", 
                             backgroundColor:"transparent",
                            color:"white", 
                             borderColor:"white",
                            borderRadius:"30px",
                            padding:"10px",
                            width:220,
                            fontSize:20,
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal"
                        }}

 border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" src="http://dorabros.s3-website-us-east-1.amazonaws.com/images/PaypalDonate.png" /></button>


</form>
</div>
        <div>
        </div>
        <br />
        <div style={{width:"100%"}}>
        	<div  >
        	<br/>
            <div style={{marginLeft:"10%", width:"80%"}}>
            <a href="https://uk.virginmoneygiving.com/Team/Dorabros" target="_blank">
            <img src="http://dorabros.s3-website-us-east-1.amazonaws.com/images/virginGiving.png" style={{width:"50%",varticalAlign:"top"}}/>
            </a>
            <a href='http://www.justgiving.com/Dorabros' title='JustGiving - Sponsor me now!' target='_blank'><img src="http://dorabros.s3-website-us-east-1.amazonaws.com/images/justGiving.jpg" style={{width:"50%", verticalAlign:"top"}} /></a>
            </div>
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

/*        */

/*        <div style={{width:"50%",height:10, backgroundColor:"#d7d7d7", borderRadius:10, margin:"auto"}}>
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




*/
