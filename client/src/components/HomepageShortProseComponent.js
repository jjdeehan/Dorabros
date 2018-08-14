import React, {Component} from 'react';
import * as d3 from 'd3'
import Countdown from './CountdownComponent'
export default class HomepageShortProse extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('here')
    var svg = d3.select('.progress')
      /*.append('svg')
      .attr('height', 100)
      .attr('width', 500);*/

    var states = ['started', 'inProgress', 'completed'],
        segmentWidth = 100,
      currentState = 'started';


    svg.append('rect')
      /*.attr('class', 'bg-rect')
      .attr('rx', 10)
      .attr('ry', 10)*/
      .attr('fill', 'white')
      .attr('height', 16)
      .attr('width', 500)
      .attr('x', 0);

    var progress = svg.append('rect')
            //.attr('class', 'progress-rect')
            .attr('fill', '#2eb24a')
            .attr('height', 16)
            .attr('width', 0)
            /*.attr('rx', 10)
            .attr('ry', 10)*/
            .attr('x', 0);

    progress.transition()
      .duration(1000)
      .attr('width', function(){
        var index = states.indexOf(currentState);
        return (index + 1) * segmentWidth;
      });

    function moveProgressBar(){
      progress.transition()
        .duration(1000)
        .attr('fill', '#2eb24a')
        .attr('width', 100);
    }
    moveProgressBar()
  }

  render(){
    return(
    	<div >
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
          <div className=" blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"50%", "fontFamily":"adobe-garamond-pro"}}>
          Brought together by a thirst for challenge and a desire to do something worthwhile;
          </div>
          <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"50%", "fontFamily":"adobe-garamond-pro"}}>
          in 2019, the Dorabros will take up a gauntlet of challenges: <br />Kicking off with an ultramarathon in the Sahara - the infamous Marathon des Sables - and ending with the World's Toughest row - a 3000 mile rowing race across the Atlantic
          </div>
            <div className="text-center text-block" style={{"textAlign":"center"}}>

            </div>
        	  <br />
            <div className="progressLining" style={{margin:"0 auto", width:"100%"}}>
            <svg className="progress"></svg>
            </div>
          <div className="blockquote text-center text-block" style={{"textAlign":"center", "fontFamily":"adobe-garamond-pro"}}>
                	  Carrying us across the finish line will be the inspiring work of the Teenage Cancer Trust as we aim to raise £50 000 for this amazing charity

          </div>
          <Countdown />
        	  <br />
          </div>
      </div>
    )
  }
}
