import React, {Component} from 'react';


export default class HeaderImage extends Component {
	constructor(props){
		super(props)
	}

  componentDidMount(){
    window.scrollTo(0,0)
    console.log('body')
  }

  render(){
    return(
      <div id="headerImage" style={{postion:"absolute"}}>
      {this.props.imageSource &&
        <img src={this.props.imageSource} style={{zIndex:-10}} 
        id="headerImage"/>
      }
      </div>
    )
  }
}
