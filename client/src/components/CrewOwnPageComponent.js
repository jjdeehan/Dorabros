import React, {Component} from 'react';
import Title from '../containers/TitleContainer'
import Person from '../containers/PersonLargeContainer'
import Modal from '../containers/ModalContainer'



export default class Template extends Component {
	constructor(props){
		super(props)
		this.state = {
			crew:props.crew,
			selectedPerson:{
				name:"",
				image:"",
				description:[]
			},
			modalOpen:false
		}
		this.clicked = this.clicked.bind(this)
		this.toggleModal = this.toggleModal.bind(this)
	}


	clicked(name){
		const person = this.props.crew.filter(el => el.name == name)[0]
		console.log(person)
		this.setState({modalOpen:true,selectedPerson:{
			name,
			description:person.description,
			image:person.imageSource
		}})

	}

	toggleModal(){
		this.setState({
			modalOpen:!this.state.modalOpen
		})
	}


    render(){
	    return(
	    	<div id="crew" style={{"textAlign":"center"}} className="container">
	    	<br/>
	    	<h1 className="TITLE" style={{textAlign:"center"}}>
            <a href="/" style={{color:"black"}}>CREW</a></h1>
            <hr style={{width:"50%"}}/>
	      <div className="row" style={{"textAlign":"left"}}>
	      	<Title title="Crew" />

	      	{	
	      		this.state.crew.map(el => {
	      			return <Person person={el} key={el.name} clicked={this.clicked}/>

	      			})
	      	}
	      </div>
	      <div style={{fontSize:20, textAlign:"justify"}}>
	      {"The Dorabros are four friends brought together by a thirst for adventure and their desire to do something worthwhile. James, Charlie and Lirim became great friends while at St Benedict’s school in London, their friendship withstood their competition on the rugby pitch for the same position in the schools’ first XV. James left for Edinburgh University in 2012 and spent his four years in Scotland in the company of an ambitious rower called Rufus. Throughout their time at Edinburgh, Rufus became acquainted with many of James’ friends from London and it was not long before the Dorabros all became firm friends."}
<br />
<br />
{"By 2016, Lirim and James had just finished their university examinations and decided to embark on their next adventure. The day after their last exam Lirim and James arrived, armed with their bicycles and an unwavering sense of determination, at Amsterdam’s Schiphol airport. Their sights were set 5000km away, the other side of continental Europe, on Istanbul, Turkey. They set off on their mammoth journey without a backward glance, not knowing they were about to start a much bigger adventure than crossing a continent. They arrived two months later with a much grander plan in mind…"}
<br />
<br />
{"James and Lirim saw both promise and business experience in Charlie and asked if he would like to join them in more outrageous challenges to raise money for charity. The most epic being a “short” row across the Atlantic Ocean. (This was how it was pitched to Charlie). Without hesitation Charlie agreed."}
<br />
<br />
{"After realising the three of them had no clue how to row, Rufus came to mind. Rufus declined many times, “Why would anyone cross an ocean with Charlie?” However, after several months of persistent nagging, Rufus was worn down and The Dorabros were born!"}
<br />
<br />
{"The boys are preparing for; A Channel Swim, an Ironman, the Marathon des Sables and an Atlantic crossing. The Dorabros have one of the toughest years of training ahead of them and they are aiming to win the Talisker Whiskey Atlantic Challenge!"}




	      </div>
	      	<div id="modal"/>
	      <Modal 
	      toggleModal={this.toggleModal}
	      	image={this.state.selectedPerson.image}
	      	name={this.state.selectedPerson.name}
	      	description={this.state.selectedPerson.description}
	      	isOpen={this.state.modalOpen}
	      />
	      </div>
	    )
	  }
}
