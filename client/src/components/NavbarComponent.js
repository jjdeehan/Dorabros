import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import { HOMEPAGE_CONST, SPONSORSHIP_CONST, CAUSE_CONST, CHALLENGES_CONST, FOLLOW_US_CONST} from '../constants/navbarConstants'
const lads = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/dorabros.png'
const ocean = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/ocean.jpg'
import { Link, browserHistory, Route, Switch, browserRouter as Router } from 'react-router-dom'
const TCT = 'http://dorabros.s3-website-us-east-1.amazonaws.com/images/InAidOf_TCT.jpg'

import HeaderImage from '../containers/HeaderImageContainer';
import Content from '../containers/ContentContainer';
import SponsorshipContainer from '../containers/SponsorshipContainer'
import SponsorshipSecondLevelContainer from '../containers/SponsorshipSecondLevelContainer'


export default class Example extends React.Component {

  constructor(){
    super()
    this.state = {
      isOpen:false
    }
    this.itemClicked = this.itemClicked.bind(this)
  }

  itemClicked(){

    this.setState({isOpen:false})
  }

  render () {
    return (
        <div>

        <Menu isOpen={this.state.isOpen}>
          <br/>
          <a onClick={() => this.itemClicked()} href={"/#headerImage"} id="home" style={{color:"white"}} className="menu-item">
          <h3>HOME</h3>
          </a>
          <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <a onClick={() => this.itemClicked()} href={"/#Cause"} id="about" style={{color:"white"}} className="menu-item" >
          <h3>CAUSE</h3>
          </a>
          <hr style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <Link  onClick={this.itemClicked} to="/sponsorship">

            <div id="sponsorship" style={{color:"white"}} className="menu-item">
            <h3>SPONSORSHIP</h3>
            </div>
          </Link>          
          <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <a onClick={() => this.itemClicked()} href={"/#Challenges"} id="contact" style={{color:"white"}} className="menu-item">
          <h3>EVENTS</h3></a>
                    <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          
          <a href={"https://www.instagram.com/dorabros/?hl=en"} id="contact" target="_blank" style={{color:"white"}} className="menu-item">
          <h3>FOLLOW US</h3>
          </a>

          <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <br />
          <br />
          <div style={{position:"absolute", height:40, width:90}}>
            <div style={{float:"left", display:"block",height:40, width:40}}>
            <a href={"https://www.instagram.com/dorabros/?hl=en"} >
              <div style={{height:40, width:40}}>
              <img style={{height:40, width:40}} src={"https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/Instagram-v051916_0.png"} />
              </div>   
            </a>          
            </div>
            <div style={{float:"right",display:"block",height:40, width:40}}>
            <a href={"https://www.facebook.com/dorabros/"}>
              <div style={{height:40, width:40}}>
              <img style={{height:40, width:40}} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/534px-F_icon.svg.png"} />
              </div>   
            </a>
            </div>
          </div>


          <div style={{position:"absolute", top:window.screen.availHeight-158}}><img style={{width:220, height:135}} src={TCT}/></div>

        </Menu>
        </div>

    );
  }
}

