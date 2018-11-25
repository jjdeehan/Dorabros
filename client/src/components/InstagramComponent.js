import React, {Component} from 'react';
import Instafeed from 'react-instafeed'
const InstagramIcon ='http://dorabros.s3-website-us-east-1.amazonaws.com/images/instagram.png'


export default class Instagram extends Component {


  render(){
    return(
      <div>
        <h1 className="TITLE" style={{textAlign:"center"}}>
            <a href="/" style={{color:"black"}}>OUR JOURNEY</a></h1>
            <hr style={{width:"50%"}}/>
      <a href={"https://www.instagram.com/dorabros/?hl=en"} target="_blank">
      <div style={{margin:"0 auto"}}>
        <img src={InstagramIcon} style={{heigth:"100px", width:"300px", display:"block", margin:"auto"}} />
      </div>
      <div style={{margin:"0 auto"}} className="container">
          <div id="instafeedTarget" className="row">
      <Instafeed className="row"
        limit='4'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={"instafeedTarget"}
        userId='8180749777'
        clientId='1508d8435f7b42f2a05d534ad853d7c6'
        accessToken='8180749777.1508d84.d76b7494f7554ef79555af5da07358cc'
        template={`<div class='col-md-3' style="padding:10px"><a href='{{link}}' target='_blank' ><img src='{{image}}' style='display:block;margin-right:auto;margin-left:auto;width:100%' class="img-responsive"/><div><div class='instafeed__item__overlay--inner'></div></div></a></div>`}
      />
    </div>
    </div>
    </a>
    </div>
    )
  }
}
