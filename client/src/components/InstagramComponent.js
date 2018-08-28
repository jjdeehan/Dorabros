import React, {Component} from 'react';
import Instafeed from 'react-instafeed'

export default class Instagram extends Component {
  render(){
    return(
      <div style={{margin:"0 auto"}} className="row">
          <div id={"instafeedTarget"}>
      <Instafeed className="col-md-4"
        limit='5'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={"instafeedTarget"}
        userId='8180749777'
        clientId='1508d8435f7b42f2a05d534ad853d7c6'
        accessToken='8180749777.1508d84.6fc0fe6fe195430db03096ce68a9bdc7'
      />
    </div>
    </div>
    )
  }
}
