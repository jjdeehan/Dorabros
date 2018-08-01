import React, {Component} from 'react';
import Person from '../containers/PersonContainer'
import Title from '../containers/TitleContainer'


export default class Crew extends Component {
	constructor(){
		super()
		this.state = {
			crew:[{
				name:"James",
				job:"Coder",
				lookingForwardTo:"A memorable New Years eve on the boat",
				crewmatesDescription:"",
				dreading:"",
				desertIslandDisk:"Gorgeous - Kanye",
				greatestFear:"Falling out",
				age:"24",
				imageSource:["https://adrift350988735.files.wordpress.com/2018/06/screen-shot-2018-06-17-at-23-38-28.png?w=696&h=779", ""],
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
				imageSource:["",""],
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
				goingToStruggleWithout:"Natalie (Our Campaign manager)",
				age:"24",
				imageSource:["https://adrift350988735.files.wordpress.com/2018/06/screen-shot-2018-06-17-at-23-44-25.png?w=673&h=779","https://preview.ibb.co/c8nFPT/Screen_Shot_2018_07_31_at_13_53_09.png"],
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
    	<div style={{"textAlign":"center"}}>
    	  		**** DESCRIPTION HERE ****
      <div className="row" style={{"textAlign":"left"}}>
      <div className="col-centered">
      	<Title title="Crew" />
      	{	this.state.crew.map(el => {
      			return <Person person={el} className="text-block" />
      			})
      	}
      </div>
      </div>
      </div>
    )
  }
}
