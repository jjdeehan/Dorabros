import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import { HOMEPAGE_CONST, SPONSORSHIP_CONST, CAUSE_CONST, CHALLENGES_CONST, FOLLOW_US_CONST} from '../constants/navbarConstants'
import lads from '../images/dorabros.png'
import ocean from '../images/ocean.jpg'

export default class Example extends React.Component {

  constructor(){
    super()
  }

  render () {
    return (

        <Menu>
        <br />
          <a onClick={() => this.props.updatePage(HOMEPAGE_CONST,lads)} href={"/#svg"} id="home" style={{color:"white"}} className="menu-item">
          <h1>Home</h1>
          </a>
          <br />
          <a onClick={() => this.props.updatePage(HOMEPAGE_CONST,lads)} href={"/#Cause"} id="about" style={{color:"white"}}className="menu-item" >
          <h1>Cause</h1>
          </a>
          <br />
          <a onClick={() => this.props.updatePage(SPONSORSHIP_CONST, ocean)} id="contact" style={{color:"white"}} className="menu-item">
          <h1>Sponsorship</h1>
          </a>
          <br/>
          <a onClick={() => this.props.updatePage(HOMEPAGE_CONST,lads)} href={"/#Challenges"} id="contact" style={{color:"white"}} className="menu-item">
          <h1>Events</h1></a>
          <br/>
          <a href={"https://www.instagram.com/dorabros/?hl=en"} id="contact" target="_blank" style={{color:"white"}} className="menu-item">
          <h1>Follow us</h1></a>
        </Menu>

    );
  }
}

