import React, {Component} from 'react';
import Person from '../containers/PersonContainer'
import Title from '../containers/TitleContainer'
import Lirim from '../images/Lirim.png'
import Charlie from '../images/Charlie.png'
import James from '../images/James.png'

export default class Crew extends Component {
	constructor(){
		super()
		this.state = {
			crew:[{
				name:"James",
				job:"Software Developer",
				lookingForwardTo:"A memorable New Years eve on the boat",
				crewmatesDescription:"",
				dreading:"",
				desertIslandDisk:"Gorgeous - Kanye",
				greatestFear:"Falling out",
				age:"24",
				imageSource:[James, ""],
				funnyImage:"",
				goingToStruggleWithout:"Galaxy Chocolate",
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"Three Idiots",
				onScreenHero:""
					}, {
				name:"Lirim",
				job:"Chef",
				lookingForwardTo:"Stories for the Grandchildren",
				crewmatesDescription:"A big old softie with a big old heart",
				dreading:"Charlie's chat",
				desertIslandDisk:"Taddy Porter - In the morning",
				greatestFear:"Liam Neeson",
				age:"23",
				imageSource:[Lirim,""],
				goingToStruggleWithout:"A microwave",
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"",
				onScreenHero:"",
					}, {
				name:"Charlie",
				job:"Business Development Consultant",
				lookingForwardTo:"Teaching the boys how to fish",
				crewmatesDescription:"Canon",
				dreading:"The anticipation",
				greatestFear:"Open water",
				desertIslandDisk:"",
				goingToStruggleWithout:"Natalie",
				age:"24",
				imageSource:[Charlie,"https://preview.ibb.co/c8nFPT/Screen_Shot_2018_07_31_at_13_53_09.png"],
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"Titanic II",
				onScreenHero:"",
					}]
			}
	}
	/*
	all three of us have been into the ttenage cancer trust macmillan ward and have met the. howvere, we realise as three lads from west london, the only way w ecan truly make a differnce is by */

  render(){
    return(
    	<div id="crew" style={{"textAlign":"center"}} className="container">
      <div className="row" style={{"textAlign":"left"}}>
      	<Title title="Crew" />
      	{	this.state.crew.map(el => {
      			return <Person person={el} key={el.name} />

      			})
      	}
      </div>
      <hr/>
      </div>
    )
  }
}
