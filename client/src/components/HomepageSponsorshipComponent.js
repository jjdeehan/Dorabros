import React, {Component} from 'react';


export default class HomepageSponsorship extends Component {
	constructor(props){
		super(props)
		this.state = {
			sponsors: []
		}
	}
  render(){
    return(
      <div id="Sponsors">
      <br/>
      {this.state.sponsors.lenght &&
	    <h1 className="TITLE" style={{textAlign:"center"}}>
        <a href="/" style={{color:"black"}}>SPONSORS</a></h1>
    	}
      </div>
    )
  }
}
