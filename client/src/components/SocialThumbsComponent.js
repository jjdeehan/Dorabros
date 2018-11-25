import React, {Component} from 'react';


export default class Template extends Component {
  render(){
    return(


	      <div style={{position:"fixed", height:40, width:90, bottom:40, left:40, zIndex:200}}>
            <div style={{float:"left", display:"block",height:40, width:40}}>
            <a href={"https://www.instagram.com/dorabros/?hl=en"} >
              <div style={{height:40, width:40}}>
              <img style={{height:40, width:40}} target="_blank" src={"http://dorabros.s3-website-us-east-1.amazonaws.com/images/insta.png"} />
              </div>   
            </a>          
            </div>
            <div style={{float:"right",display:"block",height:40, width:40}}>
            <a href={"https://www.facebook.com/dorabros/"}>
              <div style={{height:40, width:40}}>
              <img style={{height:40, width:40}} target="_blank" src={"http://dorabros.s3-website-us-east-1.amazonaws.com/images/facebook.png"} />
              </div>   
            </a>
            </div>
          </div>

    )
  }
}
/*	      <div className="col-md-3">
	      <div style={{height:10,width:10}}>
	      <img style={{height:10,width:10}} src="http://dorabros.s3-website-us-east-1.amazonaws.com/images/insta.png"/>
	      </div>
	      </div>
	      <div className="col-md-3">
	      <div style={{height:10,width:10}}>
	      <img style={{height:10,width:10}} src="http://dorabros.s3-website-us-east-1.amazonaws.com/images/facebook.png"/>
	      </div>
	      </div>*/