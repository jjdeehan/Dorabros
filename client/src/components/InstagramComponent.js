import React, {Component} from 'react';
import Instafeed from 'react-instafeed'

export default class Instagram extends Component {
  render(){
    return(
      <div style={{margin:"0 auto"}} className="conatiner">
          <div id={"instafeedTarget"} className="row">
      <Instafeed className="row"
        limit='6'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={"instafeedTarget"}
        userId='8180749777'
        clientId='1508d8435f7b42f2a05d534ad853d7c6'
        accessToken='8180749777.1508d84.6fc0fe6fe195430db03096ce68a9bdc7'
        template={`<div class='col-md-4'><a href='{{link}}' target='_blank' ><img src='{{image}}' style='display:block;margin-right:auto;margin-left:auto;width:100%' class="img-responsive"/><div><div class='instafeed__item__overlay--inner'></div></div></a></div>`}
      />
    </div>
    </div>
    )
  }
}
