import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { CHALLENGE_CONST, CAUSE_CONST, CREW_CONST, SPONSORSHIP_CONST, CONTACT_CONST, HOMEPAGE_CONST} from '../constants/navbarConstants'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarSections: [{
      page:CHALLENGE_CONST,
      imageSource:"https://www.casaviejalodge.com/wp-content/uploads/2015/06/mahi4.jpg",
      pageId:"#Challenge"
    },
    {
      page:CAUSE_CONST,
      imageSource:"https://www.teenagecancertrust.org/sites/default/files/Teenage%20Cancer%20Trust%20%20in%20aid%20of%20logo%20cmyk_0.jpg",
      pageId:"#Cause"
    },
    {
      page:CREW_CONST,
      imageSource:"",
      pageId:"#Crew"
    },
    {
      page:SPONSORSHIP_CONST,
      imageSource:"",
      pageId:"#Sponsors"
    },
    {
      page:CONTACT_CONST,
      imageSource:"",
      pageId:"#Contact"
    }
      ]
    }
    this.pageClicked = this.pageClicked.bind(this)
  }

  pageClicked (page, imageSource) {
    //this.props.changePage(page, imageSource)
  }

  render() {
    return (
      <div>
        <div className="row" style={{position:"absolute", width:"100%", float:"none"}}>
          <div className="align-self-center" style={{paddingTop:"20px", margin:"0 auto", display:"inline-block", align:"center", color:"white"}}>{"DORABROS"}</div>
        </div>
        <div style={{marginLeft:"0 auto", marginRight:"0 auto"}}>
        <Navbar color="inverse" className="topnav navbar-expand-lg" style={{width:"80%", float:"none", position:"absolute", marginTop:"60px", zIndex:20,"backgroundColor":"transparent", marginLeft:"15%"}}>
            <button className="navbar-toggler ml-auto"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div id="navbarSupportedContent" style={{'color':'white'}} className="collapse navbar-collapse opaque">
            
              <Nav className="" navbar>
                {this.state.navbarSections.map((el, index) => {
                  return <NavItem className="clickable" style={{'color':'white', fontFamily:'FatFrank', margin:"auto"}} key={el.page}>
                      <NavLink style={{color:'white', fontFamily:'FatFrank', fontSize:22}}href={el.pageId} onClick={() => this.pageClicked(el.page,el.imageSource)}>{el.page}</NavLink>
                    </NavItem>
                    
                })}
              </Nav>
              </div>
        </Navbar>
        </div>
      </div>
    );
  }
}
