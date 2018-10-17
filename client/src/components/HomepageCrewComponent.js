import React, {Component} from 'react';
import HomepageTitle from '../containers/HomepageTitleContainer'
import Crew from './CrewComponent'

export default class HomepageCrew extends Component {
  render(){
    return(
      <div id="Crew">
      <h1 className="TITLE" style={{textAlign:"center"}}>
		            <a href="/" style={{color:"black"}}>CREW</a></h1>
		            <hr style={{width:"50%"}}/>
      <Crew />
      </div>
    )
  }
}
