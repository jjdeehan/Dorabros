import React, {Component} from 'react';
import YouTube from "react-youtube"

const TCTLogo = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/InAidOf_TCT.jpg";


export default class HomepageShortProse extends Component {
  constructor(props){
    super(props)
  }

  

  render(){
    return(
    	<div >
      <div style={{margin:"auto", width:"100%", display:"block", position:"relative", textAlign:"center"}}>
      <YouTube style={{maxWidth:"100%"}}
        videoId={"GeZa_GlH8p4"}                  // defaults -> null
        id={"rtf"}                       // defaults -> null      // defaults -> ''
        opts={{maxWidth:"100%"}}
      />
      </div>
        <div id="Cause">
      
      


        	  <br />
          </div>
      </div>
    )
  }
}
