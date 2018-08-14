import React, {Component} from 'react';
import TCTLogo from "../images/InAidOf_TCT.jpg";


export default class HomepageCause extends Component {
  render(){
    return(
    	<div>
    	  <div className="section-container-cause">
		  <main className="section-main-cause">
		  <div className="section-main-container-cause
		  "><br />
	      <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"white", width:"50%", "fontFamily":"adobe-garamond-pro"}} ><div><img src={
	      	TCTLogo} style={{height:"50%", width:"100%"}} /></div><br />“In the UK every day 7 teenagers between the ages of 13 – 24 are diagnosed with cancer. They need treatment and support from the moment they first hear ‘cancer’. Teenage Cancer Trust is the only charity dedicated to making this happen.”
	      <br />
	      </div>
	      </div>
	      </main>
	      </div>
      </div>
    )
  }
}
