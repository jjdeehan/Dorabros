import React, {Component} from 'react';
import Instafeed from 'react-instafeed'

export default class Template extends Component {
	constructor(){
		super()
		this.state = {
			mounted:false
		}
	}

	componentDidMount(){
		this.setState({mounted:true})
	}


  render(){
    return(
      <div>
            <div style={{margin:"0 auto"}} className="container">
            <h1 className="TITLE" style={{textAlign:"center"}}>
		            <div href="/" style={{color:"black"}}>CORPORATE SPONSORS</div></h1>
		            <hr style={{width:"50%"}}/>
          <div id="instafeedTarget3" className="row">
       {!this.state.mounted && <Instafeed className="row"
        limit='30'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='least-recent'
        target={"instafeedTarget3"}
        userId='9419700411'

        clientId='ac5a5758cacb4fb7bd07add5542b9535'
        accessToken='9419700411.1677ed0.1ab0934886344d4fa12df30f20c92236'
        template={`<div class='col-md-3' style="padding:10px"><img src='{{image}}' style='display:block;margin-right:auto;margin-left:auto;width:100%' class="img-responsive"/><div><div class='instafeed__item__overlay--inner'></div></div><br/><div style="color:black;">{{model.short_caption}}</div></div>`}
      />}
                          
        </div>
        </div>
      </div>
    )
  }
}
