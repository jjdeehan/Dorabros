import React from 'react';
import { connect } from 'react-redux';
import Navbar from './containers/NavbarContainer';
import ChallengeCycle from './containers/ChallengeCycleContainer';
import Dorabro from './containers/DorabroContainer';
import { Route } from 'react-router-dom'

import ocean from './images/ocean.jpg'
import ocean2 from './images/ocean2.jpg'
import lads from './images/Lads.png'

import SponsorshipContainer from './containers/SponsorshipContainer'
import SponsorshipSecondLevelContainer from './containers/SponsorshipSecondLevelContainer'
import SponsorshipCorporateContainer from './containers/SponsorshipCorporateContainer'
import Sponsorship250Container from './containers/Sponsorship250Container'
import HeaderImage from './containers/HeaderImageContainer'
import HomepageContainer from './containers/HomepageContainer'
 
//load components

const App = ({ user }) => (
  <div>
  	<Dorabro />
  	<Navbar />
	<Route exact={true} path="/" render={() => 
		<div>
			<HeaderImage source={lads}/>
			<HomepageContainer />
		</div>} 
	/>
  	<Route exact={true} path="/sponsorship" render={() => 
  		<div>
  			<HeaderImage source={ocean2}/>
			<SponsorshipContainer/>
		</div>} />
  	<Route exact={true} path="/sponsorship/dorabros" render={() => 
  		<div>
	  		<HeaderImage source={ocean}/>
			<SponsorshipSecondLevelContainer />
		</div>} />
  	<Route exact={true} path="/sponsorship/corporate" render={() => 
  		<div>
	  		<HeaderImage source={ocean2}/>
			<SponsorshipCorporateContainer />
		</div>} />
  	<Route exact={true} path="/sponsorship/250Club" render={() => 
  		<div>
	  		<HeaderImage source={ocean2}/>
			<Sponsorship250Container />
		</div>} />
	</div>
);

const mapState = (state) => ({
});

export default connect(mapState)(App);
