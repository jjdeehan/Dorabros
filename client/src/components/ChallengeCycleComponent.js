import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import MdSLogo from '../images/MdSLogo.png'
import LM from '../images/LM.png'
import IM from '../images/IM.png'
import CS from '../images/CS.png'
import TWAC from '../images/TWAC.jpg'
// hex color green #62ee1f
// blue #0135fd
// yellow #faf503
export default class ChallengeCycle extends Component {

  render(){
    return(
      <div >

		  <div className="section-container">
		  <main className="section-main">
		    <div className="section-main-container
		  ">
		      <section>
		      <br />
		      	<h1 className="TITLE" style={{textAlign:"center"}}>
		            <a href="/" style={{color:"white"}}>EVENTS</a></h1>
		<div style={{marginLeft:"10%", maxWidth:"90%"}}>
		<VerticalTimeline >
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="April 2019"
		    iconStyle={{ color: '#0135fd' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right"}} width="100" height="100" src={MdSLogo}  />
		    <h3 className="vertical-timeline-element-title">Marathon des Sables</h3>
		    <h4 >Morocco</h4>
		    <p>
		      The world's Toughest Footrace, a 280km+ Ultramarathon through the Sahara
		    </p>
		  </VerticalTimelineElement>


		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="April 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right"}} width="250" height="100" src={LM}  />
		    <h3 className="vertical-timeline-element-title">London Marathon</h3>
		    <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
		    <p>
		      A staple of endurance
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="May 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		    >
		    <h3 className="vertical-timeline-element-title">A Task a day for the Month of May</h3>
		    <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
		    <p>
		      For the month of May, the Dorabros will be completing one task of your choosing every day
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="June 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right"}} width="250" height="100" src={IM}  />
		    <h3 className="vertical-timeline-element-title">IronMan</h3>
		    <h4 className="vertical-timeline-element-subtitle">Nice, France</h4>

		    <p>
		      "Athletes begin with a beach start and embark on a two-loop, 3,8 km swim in the pristine waters of the Mediterranean Sea. The 180 km bike course is the jewel of IRONMAN France as it follows much of the original Nice Triathlon route and passes through villages and mountains. There are 6,500 feet of challenging climbs, but athletes will enjoy beautiful panoramic views. The 42,195 km run will include a flat and fast four-loop course along the Promenade des Anglais. Athletes can expect impressive spectator support along the route."
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="August 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		    <h3 className="vertical-timeline-element-title">Road to London</h3>
		    <h4 className="vertical-timeline-element-subtitle">Italy, France, England</h4>
		    <p>
		      The Dorabros, along with some pals, will be Cycling home from the Amalfi Coast
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="August 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		    <h3 className="vertical-timeline-element-title">Fundraiser Ball</h3>
		    <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
		    <p>
		      The Dorabros will be hosting a Fundraiser Ball in London for those who are keen to support the great work of the Teenage Cancer Trust
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="September 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right"}} width="250" height="100" src={CS}  />
		    <h3 className="vertical-timeline-element-title">Relay Swim across the Channel</h3>
		    <h4 className="vertical-timeline-element-subtitle">English Channel</h4>
		    <p>
		      The Dorabros will be crossing the channel as a team
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="December 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  	<img  style={{float:"right"}} width="350" height="100" src={TWAC}  />
		    <h3 className="vertical-timeline-element-title">Talisker Whisky Atlantic Challenge</h3>
		    <h4 className="vertical-timeline-element-subtitle">Atlantic Ocean</h4>
		    <p>
		      The final chapter in this adventure, we will be rowing across the Atlatic from La Gomera, off the coast of Africa to Antigua in the Carribbean
		    </p>
		  </VerticalTimelineElement>
		</VerticalTimeline>
		</div>
				        </section>
		    </div>
		   </main>
		</div>
	</div>
    )
  }
}
