import React, {Component} from 'react';
import { JOIN_250_CONST, SPONSORSHIP_CONST } from '../constants/navbarConstants'
import image from '../images/blue.jpg'
import ocean from '../images/ocean.jpg'


export default class Sponsorship extends Component {

	constructor(props) {
		super(props)
	}

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

      <div>
        <a>

        <form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
"/>
<button style={
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
                        }}  border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">{"JOIN THE 250 CLUB"}</button>


</form>
<br />
<div style={{textAlign:"center", width:"60%", marginLeft:"20%"}}>
<div>{""}
</div>
<hr />
</div>
    </a>
    <br/>
    <br/>
    <a  >
                <form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
"/>
<button style={
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
                        }}  border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">{"GIVE WHAT YOU CAN"}</button>


</form>
    </a>
    </div>
    </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>

    )
  }
}











