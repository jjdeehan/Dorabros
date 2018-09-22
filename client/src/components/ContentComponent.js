import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

import { CHALLENGE_CONST,  CAUSE_CONST, CREW_CONST, SPONSORSHIP_CONST, CONTACT_CONST, HOMEPAGE_CONST, SPONSORSHIP_SECOND_LEVEL_CONST, SPONSORSHIP_CORPORATE_CONST, JOIN_250_CONST } from '../constants/navbarConstants'

import HomepageContainer from '../containers/HomepageContainer'
import ChallengeContainer from '../containers/ChallengeContainer'
import CauseContainer from '../containers/CauseContainer'
import CrewContainer from '../containers/CrewContainer'
import SponsorshipContainer from '../containers/SponsorshipContainer'
import SponsorshipSecondLevelContainer from '../containers/SponsorshipSecondLevelContainer'
import ContactContainer from '../containers/ContactContainer'
import SponsorshipCorporateContainer from '../containers/SponsorshipCorporateContainer'
import Sponsorship250Container from '../containers/Sponsorship250Container'


export default class Content extends Component {

	constructor(props){
		super(props)
	}

  render(){
    console.log('content render')
    return(
      <div>
      {
        (this.props.page == HOMEPAGE_CONST  || !this.props.page)
        &&
        <HomepageContainer />
      }
      {
      	this.props.page == SPONSORSHIP_CONST
      	&&
        <SponsorshipContainer/>
      }
      {
        this.props.page == SPONSORSHIP_SECOND_LEVEL_CONST 
        &&
        <SponsorshipSecondLevelContainer />
      }
      {
        this.props.page == SPONSORSHIP_CORPORATE_CONST
        &&
        <SponsorshipCorporateContainer />
      }
      {
        this.props.page == JOIN_250_CONST
        &&
        <Sponsorship250Container />
      }
      </div>
    )
  }
}


/*{
        (this.props.page == null || this.props.page == HOMEPAGE_CONST)  
      }*/