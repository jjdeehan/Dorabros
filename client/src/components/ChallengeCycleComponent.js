import React, {Component} from 'react';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import VerticalTimelineElement from './reacttimelineelement'
const MdSLogo = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/MdSlogo.png'
const LM = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/LM.png'
const IM = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/IM.png'
const CS = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/CS.png'
const TWAC = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/TWAC.jpg'
// hex color green #62ee1f
// blue #0135fd
// yellow #faf503
export default class ChallengeCycle extends Component {

  render(){
    return(
      <div id="Challenges">

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
		  <img  style={{float:"right", height:"auto", maxWidth:"100%"}} width="100" height="100" src={MdSLogo}  />
		    <h3 className="vertical-timeline-element-title">Marathon des Sables</h3>
		    <h4 >Morocco</h4>
		    <p>
		      The world's Toughest Footrace, a 280km+ Ultramarathon through the Sahara
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="May 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		    <h3 className="vertical-timeline-element-title">Fundraising Ball</h3>
		    <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
		    <p>
		      The Dorabros will be hosting a Fundraising Ball in London for those who are keen to support the great work of the Teenage Cancer Trust
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="June 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right", height:"auto", maxWidth:"100%"}} width="250" height="100" src={IM}  />
		    <h3 className="vertical-timeline-element-title">IronMan</h3>
		    <h4 className="vertical-timeline-element-subtitle">Nice, France</h4>

		    <p>
		      A 3.8 km swim in the pristine waters of the Mediterranean Sea. The 180 km bike course with 6,500 feet of challenging climbs, followed by a marathon along the Promenade des Anglais
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="August 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		    <h3 className="vertical-timeline-element-title">Rome to home</h3>
		    <h4 className="vertical-timeline-element-subtitle">Italy, France, England</h4>
		    <p>
		      The Dorabros, along with some pals, will be Cycling home from Rome
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="September 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right", height:"auto", maxWidth:"100%"}} width="250" height="100" src={CS}  />
		    <h3 className="vertical-timeline-element-title">Relay Swim across the Channel</h3>
		    <h4 className="vertical-timeline-element-subtitle">English Channel</h4>
		    <p>
		      The Dorabros will be swimming across the channel as a team
		    </p>
		  </VerticalTimelineElement>
		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="December 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  	<img  style={{float:"right", height:"auto", maxWidth:"100%"}} width="350" height="100" src={TWAC}  />
		    <h3 className="vertical-timeline-element-title">Talisker Whisky Atlantic Challenge</h3>
		    <h4 className="vertical-timeline-element-subtitle">Atlantic Ocean</h4>
		    <p>
		      The final chapter in this adventure, we will be rowing across the Atlatic from La Gomera, off the coast of Africa to Antigua in the Caribbean
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
