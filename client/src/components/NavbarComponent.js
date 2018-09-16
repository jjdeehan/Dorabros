import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import { HOMEPAGE_CONST, SPONSORSHIP_CONST, CAUSE_CONST, CHALLENGES_CONST, FOLLOW_US_CONST} from '../constants/navbarConstants'
import lads from '../images/dorabros.png'
import ocean from '../images/ocean.jpg'

export default class Example extends React.Component {

  constructor(){
    super()
    this.state = {
      isOpen:false
    }
    this.itemClicked = this.itemClicked.bind(this)
  }

  itemClicked(constant, image){
    this.props.updatePage(constant, image)
    this.setState({isOpen:false})

  }

  render () {
    return (

        <Menu isOpen={this.state.isOpen}>
        
          <a onClick={() => this.itemClicked(HOMEPAGE_CONST,lads)} href={"/#headerImage"} id="home" style={{color:"white"}} className="menu-item">
          <h1>Home</h1>
          </a>
          <hr  style={{backgroundColor:"white", width:"60%", float:"left", height:1}}/>
          
          <a onClick={() => this.itemClicked(HOMEPAGE_CONST,lads)} href={"/#Cause"} id="about" style={{color:"white"}}className="menu-item" >
          <h1>Cause</h1>
          </a>
                    <hr  style={{backgroundColor:"white", width:"60%", float:"left", height:1}}/>
          
          <a onClick={() => this.itemClicked(SPONSORSHIP_CONST, ocean)} href="/#headerImage" id="contact" style={{color:"white"}} className="menu-item">
          <h1>Sponsorship</h1>
          </a>
                    <hr  style={{backgroundColor:"white", width:"60%", float:"left", height:1}}/>
          
          <a onClick={() => this.itemClicked(HOMEPAGE_CONST,lads)} href={"/#Challenges"} id="contact" style={{color:"white"}} className="menu-item">
          <h1>Events</h1></a>
                    <hr  style={{backgroundColor:"white", width:"60%", float:"left", height:1}}/>
          
          <a href={"https://www.instagram.com/dorabros/?hl=en"} id="contact" target="_blank" style={{color:"white"}} className="menu-item">
          <h1>Follow us</h1></a>
        </Menu>

    );
  }
}

