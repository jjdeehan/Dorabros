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

		  <div className="section-container" style={{paddingTop:10}}>
		  <main className="section-main">
		    <div className="section-main-container
		  ">
		      <section>
		      	<h1 className="TITLE" style={{textAlign:"center"}}>
		            <a href="/" style={{color:"white"}}>EVENTS</a></h1>
		            <hr style={{width:"25%", backgroundColor:"white"}}/>
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
		      The Marathon des Sables - The Dorabros are kicking off the campaign with a 251km footrace across the Sahara Desert. Also known as the world’s toughest footrace. This will be the opening challenge for the Dorabros that will take place in April 2019. Six marathons in Five days, great way to begin an epic year.
		    </p>
		  </VerticalTimelineElement>

		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--education"
		    date="July 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		    <h3 className="vertical-timeline-element-title">Rome to home</h3>
		    <h4 className="vertical-timeline-element-subtitle">Italy, France, England</h4>
		    <p>
		      “Rome to Home” is an appropriate name for another challenge created by the Dorabros as they will be cycling from Rome to London. It is a 2100km cycling tour that will be crossing through the infamous alps.
		    </p>
		  </VerticalTimelineElement>


		  <VerticalTimelineElement
		    className="vert-el vertical-timeline-element--work"
		    date="August 2019"
		    iconStyle={{ color: '#fff' }}
		    icon={<div/>}
		  >
		  <img  style={{float:"right", height:"auto", maxWidth:"100%", backgroundColor:"black"}} width="250" height="100" src={IM}  />
		    <h3 className="vertical-timeline-element-title">IronMan</h3>
		    <h4 className="vertical-timeline-element-subtitle">Vichy, France</h4>

		    <p>
		    Athletes will swim 3.8 km in the beautiful Lake Allier. The 180 km bike course in the countryside offers exceptional views of the Chaine des Volcans d’Auvergne. The day ends with a marathon run course on the shores of Lac d'Allier and through historical Vichy.
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
		      In September the Dorabros will be swimming across the English Channel. In this 21- mile swim from England to France the Dorabros will be facing freezing cold English waters with nothing but goose fat as protection.
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
		    The final challenge the Dorabros are facing will be Rowing across the Atlantic Ocean. Rowing over 3000 nautical miles, the Dorabros will battle with sleep deprivation, hallucinations, salt sores and physical extremes inflicted by the race. The Dorabros will be alone with their thoughts and the expanse of the ocean. They have one job, which is getting the boat safely to the other side.
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
