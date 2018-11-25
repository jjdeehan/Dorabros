import React, {Component} from 'react';
import Instafeed from 'react-instafeed'


export default class Template extends Component {
  render(){
    return(
    	      <div>
          <br/>
        <h1 className="TITLE" style={{textAlign:"center"}}>
        <a style={{color:"black"}}>WALL OF FAME</a></h1>
        <hr style={{width:"50%"}}/>
        <div style={{width:"100%"}}>
        <h3 style={{textAlign:"center"}}>WE COULDN'T DO IT WITHOUT YOU</h3> 
            <div>
                <br/>
                      <div>
      <div style={{margin:"0 auto"}} className="container">
          <div id="instafeedTarget2" className="row">
                            <Instafeed className="row"
        limit='3'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={"instafeedTarget2"}
        userId='8180749777'
        clientId='1508d8435f7b42f2a05d534ad853d7c6'
        accessToken='8180749777.1508d84.6fc0fe6fe195430db03096ce68a9bdc7'
        template={`<div class='col-md-4' style="padding:10px"><a href='{{link}}' target='_blank' ><img src='{{image}}' style='display:block;margin-right:auto;margin-left:auto;width:100%' class="img-responsive"/><div><div class='instafeed__item__overlay--inner'></div></div></a></div>`}
      />
                          
        </div>
        </div>
        </div>
        </div>
        </div>
        <br />
        <br />        
        <br />
        <br />
      </div>





    )
  }
}
