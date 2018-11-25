import React from 'react';
import { connect } from 'react-redux';
import Navbar from './containers/NavbarContainer';
import ChallengeCycle from './components/ChallengeCycleComponent';
import Dorabro from './containers/DorabroContainer';
import { Route } from 'react-router-dom'

const ocean = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean.jpg'
const ocean2 = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean2.jpg'
let lads = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Lads.jpg'
lads = "./images/Lads.jpg"
const ocean3 = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean3.jpeg'

import SponsorshipContainer from './containers/SponsorshipContainer'
import SponsorshipSecondLevelContainer from './containers/SponsorshipSecondLevelContainer'
import SponsorshipCorporateContainer from './containers/SponsorshipCorporateContainer'
import Sponsorship250Container from './components/Sponsorship250Component'
import HeaderImage from './containers/HeaderImageContainer'
import HomepageContainer from './components/HomepageComponent'
import ContactUsComponent from './components/ContactUsComponent'
import SocialThumbs from './components/SocialThumbsComponent'
 
//load components

const App = ({ user }) => (
  <div>
  	
  	<Navbar />
	<Route exact={true} path="/" render={() => 
		<div>
			<HeaderImage source={lads} />
			<HomepageContainer />
		</div>} 
	/>

  	<Route exact={true} path="/corporateSponsorship" render={() => 
  		<div>
	  		<HeaderImage source={ocean2}/>
			<SponsorshipCorporateContainer />
		</div>} />

	<Route exact={true} path="/250Club" render={() => 
  		<div>
	  		<HeaderImage source={ocean3}/>
			<Sponsorship250Container />
		</div>} />
	<SocialThumbs />
	</div>
);

const mapState = (state) => ({
});

export default connect(mapState)(App);
