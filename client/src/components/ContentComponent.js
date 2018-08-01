import React, {Component} from 'react';
import { connect } from 'react-redux';

import { CHALLENGE_CONST,  CAUSE_CONST, CREW_CONST, SPONSORSHIP_CONST, CONTACT_CONST, HOMEPAGE_CONST } from '../constants/navbarConstants'

import HomepageContainer from '../containers/HomepageContainer'

import ChallengeContainer from '../containers/ChallengeContainer'
import CauseContainer from '../containers/CauseContainer'
import CrewContainer from '../containers/CrewContainer'
import SponsorshipContainer from '../containers/SponsorshipContainer'
import ContactContainer from '../containers/ContactContainer'


export default class Content extends Component {

	constructor(props){
		super(props)
	}

  render(){
    return(
      <div>
      {
      	(this.props.page == null || this.props.page == HOMEPAGE_CONST) && <HomepageContainer />
      }
      {
      		this.props.page == CHALLENGE_CONST
      		&&
      		<ChallengeContainer />
      }{
      		this.props.page == CAUSE_CONST
      		&&
      		<CauseContainer />
      }
      {
      	this.props.page == CREW_CONST
      		&&
      		<CrewContainer />
      }
      {
      	this.props.page == SPONSORSHIP_CONST
      	&&
      	<SponsorshipContainer />
      }
      {
      	this.props.page == CONTACT_CONST
      	&&
      	<ContactContainer />
      }

      </div>
    )
  }
}
