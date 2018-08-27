import React, {Component} from 'react';
import * as d3 from 'd3'
import TCTLogo from "../images/InAidOf_TCT.jpg";


export default class HomepageShortProse extends Component {
  constructor(props){
    super(props)
  }

  

  render(){
    return(
    	<div >
        <div >

<a href="https://www.teenagecancertrust.org/" target="_blank">
                    <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"60%", "fontFamily":"adobe-garamond-pro"}} ><div><img src={
          TCTLogo} style={{height:"50%", width:"100%"}} /></div><br />“In the UK every day 7 teenagers between the ages of 13 – 24 are diagnosed with cancer. They need treatment and support from the moment they first hear ‘cancer’. Teenage Cancer Trust is the only charity dedicated to making this happen.”
        <br />
        </div>
            <br />
            <br />
            <br />
            <br />
        	  <br />
            
          </a>
        	  <br />
          </div>
      </div>
    )
  }
}
