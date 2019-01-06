import React, {Component} from 'react';

import ChallengeCycle from './ChallengeCycleComponent';
import HomepageShortProse from './HomepageShortProseComponent';
import Instagram from './InstagramComponent';
import HomepageCause from './HomepageCauseComponent';
import HomepageCrew from './HomepageCrewComponent';
import HomepageSponsorship from './HomepageSponsorshipComponent';
import HomepageContact from './ContactUsComponent';
import SponsorUsHomepage from '../containers/SponsorUsHomepageContainer';
import InstagramEmbed from 'react-instagram-embed';
import Sponsors from './SponsorsComponent'



export default class Homepage extends Component {
  render(){
    return(
      <div>
        <HomepageCause />
       <br />
       <br />
       <br />
       <br />
       <br />
        <HomepageShortProse />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
               <HomepageCrew />
       <br />
        
        <br />
        <Instagram />
        <br/>
        <br />
        <br />

        <br />

        <Sponsors />
       <br />
       <br />

       <br />
       <br />
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








