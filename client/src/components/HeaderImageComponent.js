import React, {Component} from 'react';


export default class HeaderImage extends Component {
	constructor(props){
		super(props)
	}

  render(){
    console.log(this)
    return(
      <div>
      {this.props.imageSource &&
        <img src={this.props.imageSource} style={{zIndex:10, postion:"fixed"}} 
        id="headerImage"/>
      }
      </div>
    )
  }
}
