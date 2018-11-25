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
      <div style={{margin:"auto", display:"block", position:"relative", textAlign:"center"}}>
      <YouTube
        videoId={"GeZa_GlH8p4"}                  // defaults -> null
        id={"rtf"}                       // defaults -> null      // defaults -> ''
      />
      </div>
        <div id="Cause">
      
      


        	  <br />
          </div>
      </div>
    )
  }
}
