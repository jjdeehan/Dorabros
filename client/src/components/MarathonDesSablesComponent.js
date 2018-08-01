import React, {Component} from 'react';
import * as d3 from 'd3'
import * as topojson from 'topojson'
import world_json from './world.json'

export default class Template extends Component {

	constructor(props){
		super(props)
	}

	componentWillMount(){
var width = 960,
    height = 960;

var projection = d3.geo.orthographic()
    .scale(475)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(.1);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svg.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svg.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");



const func = (error, world) => {
  if (error) throw error;

  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
};
func(null, world_json)

d3.select(self.frameElement).style("height", height + "px");
	}

  render(){
    return(
      <div>
      </div>
    )
  }
}
