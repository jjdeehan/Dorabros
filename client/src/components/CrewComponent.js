import React, {Component} from 'react';
import Person from '../containers/PersonContainer'
import Title from '../containers/TitleContainer'
import Lirim from '../images/Lirim.jpg'
import Charlie from '../images/Charlie.jpg' 
import Rufus from '../images/Rufus.jpg'
import James from '../images/James.jpg'

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
				onScreenHero:"",
				IG_Link:"https://www.instagram.com/jamesdeehaan"
					}, {
				name:"Lirim",
				job:"Chef",
				lookingForwardTo:"Stories for the Grandchildren",
				crewmatesDescription:"",
				dreading:"Charlie's chat",
				desertIslandDisk:"Taddy Porter - In the Morning",
				greatestFear:"Liam Neeson",
				age:"23",
				imageSource:[Lirim,""],
				goingToStruggleWithout:"A microwave",
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"",
				onScreenHero:"",
				IG_Link:"https://www.instagram.com/lirimgula"
					}, {
				name:"Charlie",
				job:"Business Development Consultant",
				lookingForwardTo:"Teaching the boys how to fish",
				crewmatesDescription:"Canon",
				dreading:"The anticipation",
				greatestFear:"Open water",
				desertIslandDisk:"Something inside (So strong) - Labi Siffre",
				goingToStruggleWithout:"Natalie",
				age:"24",
				imageSource:[Charlie,"https://preview.ibb.co/c8nFPT/Screen_Shot_2018_07_31_at_13_53_09.png"],
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"Titanic II",
				onScreenHero:"",
				IG_Link:"https://www.instagram.com/charliecrane94"
					},{
				name:"Rufus",
				job:"student",
				lookingForwardTo:"Sending it",
				crewmatesDescription:"",
				dreading:"Sleeping in a cabin with James",
				greatestFear:"Arriving without a beard",
				desertIslandDisk:"Pony - Ginuwine",
				goingToStruggleWithout:"",
				age:"25",
				imageSource:[Rufus,""],
				howWouldYourFriendsDescribeYou:"",
				favouriteMovie:"Emperor's New Groove",
				onScreenHero:"Magic Mike",
				IG_Link:"https://www.instagram.com/rufusscholefield/"
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
