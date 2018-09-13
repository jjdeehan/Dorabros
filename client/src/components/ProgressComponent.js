import React, {Component} from 'react';
import Countdown from './CountdownComponent'
import axios from 'axios'


export default class Progess extends Component {

	constructor(props){
		super(props)
	}

  componentWillMount(){
    axios.get('/progress/')
    .then(res => {
      console.log(res)
    })
    console.log('here')
  }

	componentDidMount(){
    var svg = d3.select('.progress')
      /*.append('svg')
      .attr('height', 100)
      .attr('width', 500);*/

    var states = ['started', 'inProgress', 'completed'],
        segmentWidth = 100,
      currentState = 'started';


    svg.append('rect')
      .attr('class', 'bg-rect')
      .attr('rx', 5)
      .attr('ry', 10)
      .attr('fill', 'transparent')
      .attr('height', 16)
      .attr('width', 500)
      .attr('x', 0);

    var progress = svg.append('rect')
            //.attr('class', 'progress-rect')
            .attr('fill', '#fff')
            .attr('height', 16)
            .attr('width', 0)
            .attr('rx', 5)
            .attr('ry', 10)
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
        .attr('fill', '#fff')
        .attr('width', 0);
    }
    moveProgressBar()
  }



  render(){
    return(
      <div>



      </div>
    )
  }
}

/*      
            <br />
          <div className="blockquote text-center text-block" style={{color:"white","textAlign":"center", "fontFamily":"adobe-garamond-pro"}}>
                    Carrying us across the finish line will be the inspiring work of the Teenage Cancer Trust as we aim to raise £50 000 for this amazing charity

          </div>
          <div style={{width:"100%", color:"white"}}>
            <div className="progressLining" style={{marginRight:"25%", width:"50%", marginLeft:"25%"}}>
            <svg className="progress" style={{backgroundColor:"transparent"}}/>

            </div>
            </div>
            <div style={{width:"100%", marginLeft:"0%", marginRight:"35%"}}>
            <br />
            <Countdown />
            </div>*/
