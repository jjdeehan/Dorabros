import React, {Component} from 'react';
import Dorabro from "../containers/DorabroContainer"
import Countdown from "./CountdownComponent"



export default class HomepageCause extends Component {
  render(){
    return(
    	<div>
    	
    	  <div className="section-container-cause">
		  <main className="section-main-cause">
		  <div className="section-main-container-cause"><br />

                <br />
                <br />
		            <div id="Reason" className=" blockquote text-center text-block" style={{"textAlign":"center",color:"white", width:"70%"}}>
          We are running the Sahara, swimming the Channel and rowing the Atlantic in 2019
          </div>
          <br />
          <Countdown />

            <div className="text-center text-block" style={{"textAlign":"center"}}>

            </div>

	      
	      </div>

	      </main>

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
