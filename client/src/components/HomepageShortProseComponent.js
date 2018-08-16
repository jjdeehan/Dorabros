import React, {Component} from 'react';
import * as d3 from 'd3'


export default class HomepageShortProse extends Component {
  constructor(props){
    super(props)
  }

  

  render(){
    return(
    	<div >
        <div>
        <br />
        <br />
          <div className=" blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"70%", "fontFamily":"adobe-garamond-pro"}}>
          Brought together by a thirst for challenge and a desire to do something worthwhile;
          </div>
          <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"70%", "fontFamily":"adobe-garamond-pro"}}>
          in 2019, the Dorabros will take up a gauntlet of challenges: <br />Kicking off with an ultramarathon in the Sahara - the infamous Marathon des Sables - and ending with the World's Toughest row - a 3000 mile rowing race across the Atlantic
          </div>
            <div className="text-center text-block" style={{"textAlign":"center"}}>

            </div>
            <br />
            <br />
            <br />
            <br />
        	  <br />
            
          
        	  <br />
          </div>
      </div>
    )
  }
}
