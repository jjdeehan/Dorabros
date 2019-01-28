import React from 'react';
import { connect } from 'react-redux';
import Navbar from './containers/NavbarContainer';
import Dorabro from './containers/DorabroContainer';
import { Route } from 'react-router-dom'

const ocean = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean.jpg'
const ocean2 = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean2.jpg'
let lads = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Lads.jpg'
lads = "./images/Lads.jpg"
const ocean3 = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean3.jpeg'

const Lirim = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Lirim.jpg'
const dorabros = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Dorris.jpg'
const Charlie = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Charlie.jpg' 
const Rufus = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/Rufus.jpg'
const James = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/James.jpg'
const whyHeader = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/InAidOf_TCT.jpg'
const challenges = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/Challenges.jpg"
const BallImage = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/BallRoom.jpeg"
const uk = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/uk.png"
const kosovo = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/kosovo.png"
const jersey = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/jersey.png"

import SponsorshipContainer from './containers/SponsorshipContainer'
import SponsorshipSecondLevelContainer from './containers/SponsorshipSecondLevelContainer'
import SponsorshipCorporateContainer from './containers/SponsorshipCorporateContainer'
import Sponsorship250Container from './components/Sponsorship250Component'
import HeaderImage from './containers/HeaderImageContainer'
import HomepageContainer from './components/HomepageComponent'
import ContactUsComponent from './components/ContactUsComponent'
import SocialThumbs from './components/SocialThumbsComponent'
import ChallengeCycle from './components/ChallengeCycleComponent'
import ContactUs from './components/ContactUsComponent'
import Why from './components/WhyComponent'
import CrewOwnPageComponent from './components/CrewOwnPageComponent'
import Stripe from './components/StripeComponent'
import BallStripe from './components/BallStripeComponent'
import BallAfterPartyStripe from './components/BallAfterPartyStripeComponent'
import {StripeProvider} from 'react-stripe-elements';
import Ball from './components/BallComponent'
import BallAfterParty from './components/BallAfterPartyComponent'

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

	<Route exact={true} path="/thankYou" render={() => 
  		<div>
	  		<HeaderImage source={ocean3}/>
			<Sponsorship250Container />
			<br />
			<br />
			<ContactUs />
		</div>} />

	<Route exact={true} path="/crew" render={() => 
  		<div>
	  		<HeaderImage source={lads}/>
			<Sponsorship250Container />
		</div>} />

	<Route exact={true} path="/team" render={() => 
  		<div>
	  		<HeaderImage source={dorabros}/>
			<CrewOwnPageComponent
				crew={[{
				name:"James",
				description:["James grew up in Ealing, West London in the company of his best friends Lirim & Charlie. He was an enthusiastic rugby player, who was renowned for how quick he could run in a straight line, corners and defenders proved to be more of an issue..."," He headed to Scotland to study Chemical Engineering at the University of Edinburgh in 2012. As soon as he arrived in Auld Reekie, a bromance between James and Rufus blossomed."," After university he cycled across Europe to raise money for the Himalayan Cataract Project. In doing so, James fell in love with putting his body to the test for the benefit of charitable causes. It opened his eyes and made him think about bigger challenges and projects. During the cycle ride, James would not stop talking to Lirim about rowing the Atlantic Ocean, something he had set his sights on in his early years at Edinburgh. The plan for the Talisker Atlantic Challenge was born between the two in the mountain passes of Eastern Europe. However, James was not satisfied. He wanted more. His optimism and ambition lead to a full year of challenges for his long suffering friend to complete with him. Thanks to James, The Dorabros schedule for 2019 now includes; the Marathon de Sables, swimming the channel, a cycle ride from Rome to Home (London) and an Ironman. Therefore, James has decided now would be a good time to take up open-water swimming..."," Shortly after reaching Istanbul, James carried on his global adventure and ended up working on a reindeer farm in Greenland for 3 months. Recently, the travelling had to take a back seat as James has begun his promising career as a Software Developer. James works long days and has to fit in training around a demanding work timetable and greatest challenge to date, building the Dorabros website to Lirim’s specification. James saw the impact of all the money he had raised for the Himalayan Cataract Project and it inspired him to support a charity that is closer to home. James and the team are now attempting to raise even more money for the Teenage Charity Trust, a charity all the boys hold very close to their hearts. James clearly doesn’t need much to motivate him but knowing he’ll be raising money to help young individuals with cancer will get him the the finish line."],
				imageSource:[James],
				flag:uk
					}, {
				name:"Lirim",
				description:["Lirim’s father became a very successful restauranteur and entrepreneur when he moved to London from war-torn Kosovo. He achieved this by working three jobs and sleeping on park benches. Lirim idolised his father at a young age and quickly began to adopt his fathers work ethic. He was put to work in the kitchen to wash dishes on the weekends at the age of 14 whilst his friends indulged in the wonders of the weekend."," His father put him through private school and afforded him the best opportunities he could, this grounded Lirim and taught him the value of hard work. His father thought that by showing him the difficulties of the kitchen he would prevent Lirim from entering the brutal hospitality business. Little did he know he created a motivated and aspiring young chef, who would not require his marketing degree!"," Lirim spends his mornings working and his evenings working harder, he does what training he can in between his shifts in the restaurant. After all, he is his fathers son. A large motivation for our young chef is rowing for the pride of his country. Coming from a third world country and completing all these mammoth tasks is what pushes Lirim. He wants to be the first Kosovan to complete these challenges."," Although Lirim knows very little about rowing, and running and swimming and... well just about every sport the Dorabros are taking part in, one thing he is sure of, is that he will putting in 100% effort in training."],
				imageSource:[Lirim],
				flag:kosovo
					}, {
				name:"Charlie",
				description:['As a young boy Charlie always loved the outdoors, he was exposed to all corners of the world through various fishing trips with his father and family holidays. Charlies passion to see the world grew alongside him over the years. He worked abroad in both Europe and Australia', 'At a similar age to Charlie now, his mother battled the elements in a sailing race across the Atlantic, its clear to see where Charlie gets his sense of adventure. The invitation to row the Atlantic with James and Lirim deemed to be a life-changing experience and a great opportunity to one up his mother.', 'Unlike his Father swimming is not one of Charlie’s strong points (along with a few others) and the thought of swimming the English Channel is daunting. As a major role model is his life Charlie’s dad has always been supportive. Even now at the age of 60 has decided to join forces with The Dorabros to show them how its done. He has become the backbone to what is a naive swimming team. He is clearly a reflection of where Charlies strength and determination comes from, guess Charlie can’t back out now.', "Despite having completed several half marathons, the head has to rule the heart when the knee is concerned (Charlie is on his third knee). Although he wants nothing more than to be competing with the guys in all events the main aim is to cross the Atlantic and win the race, so putting himself and the team's chances at jeopardy is not an option.", 'To test yourself, to support your friends and to raise both awareness and much-needed funds for teenage cancer are Charlie’s drivers for success in this campaign, During many chapters of his life Charlie has been told ‘you won’t’ or ‘you can’t’ and this is the time for him to prove that you never give up. Charlie has been truly inspired by the strong individuals he’s already met battling cancer and this is what is going to push him to Antigua.'],
				imageSource:[Charlie],
				flag:uk
					},{
				name:"Rufus",
				description:['Rufus had decided to stop rowing after the FISU world rowing championships in Shanghai, China in August 2018. It was a sport he hadfallen into when he arrived at Edinburgh University in 2012. A knee injury had ended his dreams of becoming the next David Seaman, lid and all, so he needed a new sport and fast. Buoyed by the post Olympic spirit, he picked up an oar that autumn and never looked back. He represent the university at the Scottish Championships, European University Games, the British University Championships and managed to win the prestigious Henley Royal Regatta.', 'He rowed for Scotland at the Home International and Commonwealth Games Regattas andhe has rowed for Team GB at the u23 World Championships and FISU world championships. Rowing was a huge part of his life, it controlled his diet, social life and consumed almost every waking moment ofhis day. He got used to being poked and prodded by doctors and spent his life in Lycra charging around in wafer thin carbon fibre rowing boats that weighed about 14 kilos.', 'He was content with his achievement and was ready to begin his legal career after becoming aworld champion in Shanghai. This lasted for two weeks... The Dorabros proved too strong of an attraction to his adventurous side and the lure of all the attention it would get him sealed the deal. He is the only member of the crew that can row, at the moment, and theonly one that has spent any time at sea but his attempts to educate his crew mates have been met with destain, “how could someone with a hair cut that bad know anything about anything!”', 'He hopes tobring his sunny outlook and determined nature to the team but wonders if Charlie Crane will test his famously tolerant nature in the middle of the Atlantic. However, his biggest fear is the fact he cannot grow facial hair and will look like a boy next to his somewhathairier crew mates. The Teenage Cancer Trust is an organisation soclose to Rufus’ heart that he is willing to drag his friends across the second largest ocean in the world to support their cause. He can’t wait to get going and welcomes the challenges of an Atlantic crossing.'],
				imageSource:[Rufus],
				flag:jersey
					}]}
			 />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />

	<Route exact={true} path="/challenges" render={() => 
  		<div>
	  		<HeaderImage source={challenges}/>
			<ChallengeCycle />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />
	<Route exact={true} path="/why" render={() => 
  		<div>

  		<br/>
	  		<HeaderImage source={whyHeader}/>
			<Why />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />

	<Route exact={true} path="/donate" render={() => 
  		<div>
  		<HeaderImage source={ocean2}/>
				<Stripe />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />

	<Route exact={true} path="/ball" render={() => 
  		<div>
  		<HeaderImage source={BallImage}/>
  			<Ball />
  			<BallStripe />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />

	<Route exact={true} path="/ballAfterParty" render={() => 
  		<div>
  		<HeaderImage source={BallImage}/>
  			<BallAfterParty />
  			<BallAfterPartyStripe />
			<br />
			<br />
			<br />
			<br />
			<ContactUs />
		</div>} />


	<SocialThumbs />

	</div>
);

const mapState = (state) => ({
});

export default connect(mapState)(App);
