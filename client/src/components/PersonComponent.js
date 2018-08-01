import React, {Component} from 'react';


export default class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			index: 0,
			imageSource: props.imageSource
		}
		this.toggleImage = this.toggleImage.bind(this)
	}

	toggleImage(){
		if(this.state.index){
			this.setState({index: 0, imageSource: this.props.imageSource[0]})
		} else {
			this.setState({index: 1, imageSource: this.props.imageSource[1]})
		}
	}

  render(){
    return(
      <div className="col-md-4 col-centered">
      <div className="padded-box p col-centered" style={{color:"white"}}>

      <img src={this.state.imageSource} onMouseOver={this.toggleImage} onMouseOut={this.toggleImage} className="img-rounded col-centered"/>
      <hr/>
      <h4>{this.props.person.name}</h4>
      <br/>
      <b>
      {"Age"}</b>
      {"    "+this.props.person.age}<br/>
      <b>
      {"Job"}</b>
      {"    "+this.props.person.job}<br/>
      <b>
      {"Crewmates' description"}</b>
      {"    "+this.props.person.crewmatesDescription}<br/>
      <b>
      {"Dreading"}</b>
      {"    "+this.props.person.dreading}<br/>
      <b>
      {"Desert Island Disk"}</b>
      {"    "+this.props.person.desertIslandDisk}<br/>
      <b>
      {"Going to struggle without"}</b>
      {"    "+this.props.person.goingToStruggleWithout}<br/>
      <b>
      {"How would your friends describe you"}</b>
      {"    "+this.props.person.howWouldYourFriendsDescribeYou}<br/>
      <b>
      {"Favourite Movie"}</b>
      {"    "+this.props.person.favouriteMovie}
      </div>

      </div>
    )
  }
}
