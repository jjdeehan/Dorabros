import React, {Component} from 'react';


export default class HeaderImage extends Component {
	constructor(props){
		super(props)
	}

  render(){
    return(
      <div style={{postion:"absolute"}}>
      {this.props.imageSource &&
        <img src={this.props.imageSource} style={{zIndex:-10}} 
        id="headerImage"/>
      }
      </div>
    )
  }
}
