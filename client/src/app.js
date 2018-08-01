import React from 'react';
import { connect } from 'react-redux';
import Navbar from './containers/NavbarContainer';
import HeaderImage from './containers/HeaderImageContainer';
import Content from './containers/ContentContainer';
import ChallengeCycle from './containers/ChallengeCycleContainer';


 
//load components

const App = ({ user }) => (
  <div>
  	<Navbar />
    <HeaderImage />
    <Content />
	</div>
);

const mapState = (state) => ({
});

export default connect(mapState)(App);
