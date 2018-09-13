import React, {Component} from 'react';

import ChallengeCycle from '../containers/ChallengeCycleContainer';
import HomepageShortProse from '../containers/HomepageShortProseContainer';
import Instagram from '../containers/InstagramContainer';
import HomepageCause from '../containers/HomepageCauseContainer';
import HomepageCrew from '../containers/HomepageCrewContainer';
import HomepageSponsorship from '../containers/HomepageSponsorshipContainer';
import HomepageContact from '../containers/HomepageContactContainer';
import SponsorUsHomepage from '../containers/SponsorUsHomepageContainer';
import InstagramEmbed from 'react-instagram-embed';



export default class Homepage extends Component {
  render(){
    return(
      <div>
        <HomepageCause />
       <br />
        <HomepageShortProse />
        <br/>
        <SponsorUsHomepage />
        <HomepageCrew />
        <br />
        <Instagram />
        <br/>
  	    <ChallengeCycle />
        <br />
        <HomepageSponsorship />

        
       <br />
        <HomepageContact />
       <br />
      </div>
    )
  }
}

// colors
// green    #62ee1f   rgb(98,  238, 31)
// blue     #0135fd   rgb(1,   53,  253)
// yellow   #faf503   rgb(250, 245, 3)








