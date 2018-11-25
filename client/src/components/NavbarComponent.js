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
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";


export default class Example extends React.Component {

  constructor(){
    super()
    this.state = {
      isOpen:false,
      navbarStyle:"rgba(0,0,0,0))"
    }
    this.itemClicked = this.itemClicked.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  itemClicked(){

    this.setState({isOpen:false})
  }

  toggleCollapse(){
    if (this.state.isOpen){
      this.setState({isOpen:false, navbarStyle:"rgba(0,0,0,0))"})
    } else {
      this.setState({isOpen:true, navbarStyle:"rgba(0,0,0,2))"})
    }
    
  }

  render () {
    return (
        <div style={{position:"fixed", width:"100%", zIndex:100}}>
          <Navbar  expand="md" style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,2)," + this.state.navbarStyle}}>

          <NavbarBrand>
             <svg id="svg" version="1.1" width="140" height="90" xmlns="http://www.w3.org/2000/svg" style={{display:"block", color:"#212529"}}>
                          <g id="svgg" style={{transform:"scale(0.3)"}}>
                          <path id="path0" d="M65.722 1.257 C 51.980 3.575,36.832 13.566,27.602 26.399 C 25.270 29.642,21.205 34.652,18.569 37.534 C 10.695 46.139,6.644 55.475,5.607 67.408 C 5.119 73.025,3.856 79.915,2.800 82.720 C -0.172 90.617,0.084 106.635,3.301 114.031 C 8.012 124.864,14.048 128.281,32.146 130.363 C 37.837 131.018,44.788 132.016,47.592 132.582 C 50.397 133.147,58.173 133.949,64.873 134.362 L 77.054 135.115 77.054 141.006 C 77.054 152.346,83.269 168.030,87.596 167.610 C 88.965 167.477,90.977 167.754,92.068 168.225 C 95.330 169.633,97.286 168.079,97.994 163.516 C 98.361 161.146,99.423 155.382,100.353 150.708 C 101.284 146.034,101.727 140.625,101.338 138.688 C 100.474 134.383,102.093 133.749,114.016 133.727 L 122.083 133.711 122.769 137.940 C 123.147 140.266,123.148 144.090,122.773 146.438 C 121.937 151.667,120.541 151.651,142.514 146.654 C 181.553 137.775,215.461 131.746,243.730 128.657 C 267.489 126.060,278.788 122.028,279.682 115.825 C 279.881 114.444,280.136 113.312,280.249 113.308 C 280.361 113.304,290.061 110.795,301.803 107.732 L 323.153 102.163 331.086 107.294 C 352.574 121.195,383.116 130.008,397.305 126.402 C 400.488 125.593,400.403 125.498,393.768 122.444 C 384.051 117.972,376.724 112.018,365.746 99.672 C 360.460 93.726,354.615 87.583,352.757 86.020 L 349.380 83.178 354.406 78.806 C 357.170 76.401,363.917 69.031,369.399 62.429 C 374.880 55.827,382.981 47.620,387.400 44.193 L 395.435 37.960 390.635 37.583 C 374.805 36.338,349.472 45.141,329.014 58.997 L 320.917 64.480 309.750 63.370 C 292.595 61.663,291.241 61.352,291.419 59.160 C 291.700 55.719,291.205 51.591,290.351 50.254 C 289.893 49.537,270.652 45.811,247.592 41.973 C 182.163 31.083,148.891 23.505,117.847 12.420 C 108.810 9.193,98.102 5.387,94.051 3.961 C 85.255 0.864,74.270 -0.184,65.722 1.257 M102.550 9.921 C 140.653 24.671,179.449 33.791,258.357 46.550 C 287.909 51.328,288.905 51.662,288.934 56.802 C 288.964 61.780,286.796 62.616,277.286 61.294 C 266.351 59.773,197.970 45.532,149.456 34.673 C 76.299 18.297,58.482 16.838,37.212 25.481 C 28.842 28.882,28.911 28.026,37.677 19.673 C 56.768 1.481,74.039 -1.115,102.550 9.921 M84.146 24.351 C 99.785 26.401,112.626 28.990,168.272 41.313 C 191.955 46.558,217.195 52.111,224.363 53.654 C 231.530 55.197,236.585 56.504,235.597 56.558 C 230.109 56.861,150.209 47.283,138.244 44.888 C 95.654 36.365,42.803 33.950,26.303 39.774 L 18.045 42.688 21.771 38.784 C 34.987 24.934,54.373 20.448,84.146 24.351 M100.283 41.869 C 110.255 43.155,127.082 45.734,137.677 47.601 C 158.147 51.207,263.981 62.939,285.071 63.939 C 301.729 64.730,319.866 66.777,321.129 68.010 C 321.688 68.555,322.391 72.821,322.690 77.490 L 323.235 85.979 317.142 84.417 C 304.584 81.196,287.809 80.267,224.929 79.306 C 160.204 78.317,145.750 77.469,117.762 73.020 C 100.397 70.259,87.248 71.073,78.406 75.456 L 71.527 78.865 70.081 76.163 C 68.025 72.321,63.297 70.234,56.997 70.388 L 51.558 70.522 57.085 71.448 C 82.956 75.785,73.464 130.413,47.029 129.325 C 15.413 128.023,3.399 120.143,3.399 100.707 L 3.399 95.184 9.130 95.184 C 17.157 95.184,24.691 97.307,26.735 100.144 C 28.431 102.498,28.461 102.477,28.115 99.176 C 27.583 94.096,23.922 92.696,12.748 93.297 C 1.903 93.881,1.925 93.913,5.538 82.967 C 6.715 79.403,7.905 72.663,8.183 67.989 C 9.819 40.521,34.825 33.429,100.283 41.869 M381.446 45.491 C 377.848 48.698,370.173 56.984,364.390 63.904 C 358.607 70.825,351.775 77.762,349.207 79.320 C 343.459 82.807,343.456 82.877,348.896 86.477 C 351.328 88.086,357.661 94.448,362.971 100.616 C 373.609 112.971,377.353 116.433,384.802 120.798 C 391.328 124.623,391.144 124.905,382.720 123.986 C 366.914 122.262,343.648 113.159,330.493 103.552 L 325.010 99.547 325.721 93.117 C 326.304 87.841,325.293 74.307,323.841 67.956 C 322.654 62.764,357.246 45.195,376.204 41.362 C 388.416 38.893,388.646 39.074,381.446 45.491 M26.062 73.739 C 23.881 75.605,20.567 77.578,18.697 78.124 L 15.297 79.116 18.488 79.218 C 20.243 79.274,22.707 78.770,23.965 78.097 C 25.747 77.143,26.712 77.290,28.342 78.765 C 31.197 81.349,35.127 80.024,35.127 76.478 C 35.127 74.998,34.495 73.397,33.722 72.920 C 32.766 72.329,33.219 71.801,35.139 71.266 C 37.612 70.578,37.471 70.473,33.994 70.414 C 31.165 70.366,28.892 71.319,26.062 73.739 M119.227 75.305 C 150.228 79.712,164.421 80.519,220.174 81.040 C 305.361 81.836,324.514 84.206,323.278 93.800 C 322.548 99.469,322.760 99.333,308.685 103.158 C 244.128 120.706,120.425 135.193,65.111 131.683 L 57.134 131.177 64.174 124.138 C 73.328 114.984,75.220 109.166,74.631 91.983 L 74.221 80.033 79.444 77.339 C 84.005 74.987,91.418 73.084,97.698 72.655 C 98.768 72.581,108.457 73.774,119.227 75.305 M113.940 89.635 C 91.577 91.991,88.385 93.785,88.385 103.997 C 88.385 117.806,91.479 118.292,116.267 108.375 C 126.173 104.413,139.759 99.244,146.459 96.890 C 158.006 92.832,160.923 90.637,156.848 89.073 C 154.332 88.108,124.767 88.495,113.940 89.635 M67.790 95.751 C 66.634 104.305,63.014 111.580,56.394 118.650 C 50.991 124.422,50.785 124.820,54.223 122.853 C 62.832 117.928,69.459 105.838,68.899 96.082 L 68.555 90.085 67.790 95.751 M155.082 91.188 C 154.788 91.483,149.591 93.518,143.535 95.710 C 137.478 97.902,124.145 103.008,113.905 107.056 C 91.131 116.059,90.018 115.838,90.864 102.483 C 91.306 95.511,93.088 94.493,108.541 92.386 C 118.862 90.978,156.254 90.016,155.082 91.188 M277.620 114.403 C 277.620 119.433,264.224 123.847,241.360 126.350 C 214.310 129.312,178.185 135.724,142.227 143.946 C 133.697 145.897,126.578 147.324,126.407 147.117 C 126.236 146.911,125.782 143.600,125.399 139.759 L 124.701 132.777 134.589 132.049 C 182.518 128.520,246.791 120.184,269.688 114.526 C 275.198 113.165,277.620 113.128,277.620 114.403 M82.983 139.660 C 82.633 143.915,83.195 147.545,84.958 152.408 C 88.531 162.262,89.200 166.541,86.811 164.265 C 82.821 160.462,78.267 142.595,79.765 136.624 C 81.175 131.008,83.513 133.214,82.983 139.660 M98.199 138.306 C 99.230 141.467,99.173 143.906,97.932 149.637 C 97.062 153.654,96.065 158.853,95.716 161.190 C 94.810 167.260,93.289 166.486,89.277 157.914 C 85.655 150.174,84.146 141.744,85.451 136.545 C 86.731 131.444,96.395 132.779,98.199 138.306 " stroke="none" fill="white" fillRule="evenodd" >
                            </path>
                            </g>
                            </svg>

          </NavbarBrand>

          <NavItem>
                <NavLink style={{color:"white", fontSize:20, transform:"translate(-40px,-30px)"}}  to="#!">&#183; THE DORABROS</NavLink>
              </NavItem>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
            style={{transform:"translate(-20px,-20px)", marginRight:"100"}}
         
          >
            <NavbarNav right>
              <NavItem>
                <NavLink style={{color:"white", fontSize:20}}  to="#!">Why</NavLink>
              </NavItem>

              {!this.state.isOpen && <NavItem style={{color:"white", transform:"translate(0px,10px)"}}>
                &#183;
              </NavItem>}
              <NavItem>
                <NavLink style={{color:"white", fontSize:20}} to="#!">Challenges</NavLink>
              </NavItem>
              {!this.state.isOpen && <NavItem style={{color:"white", transform:"translate(0px,10px)"}}>
                &#183;
              </NavItem>}
              <NavItem>
                <NavLink style={{color:"white", fontSize:20}} to="#!">Team</NavLink>
              </NavItem>
              {!this.state.isOpen && <NavItem style={{color:"white", transform:"translate(0px,10px)"}}>
                &#183;
              </NavItem>}
              <NavItem>
                <NavLink style={{color:"white", fontSize:20}} to="#!">Wall of Fame</NavLink>
              </NavItem>
              {!this.state.isOpen && <NavItem style={{color:"white", transform:"translate(0px,10px)"}}>
                &#183;
              </NavItem>}
              <NavItem>
                <NavLink style={{color:"white", fontSize:20}} to="#!">Blog</NavLink>
              </NavItem>
              {!this.state.isOpen && <NavItem style={{color:"white", transform:"translate(0px,10px)"}}>
                &#183;
              </NavItem>}<div style={{paddingLeft:10, paddingTop:7}}>
              <NavItem >
                <form style={{color:"transparent"}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input style={{color:"transparent"}} type="hidden" name="cmd" value="_s-xclick" />
                  <input style={{color:"transparent"}} type="hidden" name="hosted_button_id" value="5XCB6KZPC9WP8" />
                  <button style={{
                                              transform:"translate(0px,-5px)",
                                              fontSize:18, 
                                              backgroundColor:"transparent",
                                              color:"white",
                                              textAlign:"center", 
                                              borderRadius:"30px",
                                              borderColor:"white",
                                              selectable:false,
                                              pointer:"cursor",
                                              whiteSpace:"normal",
                                              border:"solid",
                                              padding:5

                                            }} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" >
                                            SPONSOR US</button>
                  </form>
              </NavItem>

              </div>
            </NavbarNav>
            
          </Collapse>
      </Navbar>
        </div>

    );
  }
}
/*
*/

/*        <Menu isOpen={this.state.isOpen}>
          <form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
"/>
<button style={
                        {
                            textAlign:"center", 
                            width:"80%", 
                            height:"30",
                            color:"white", 
                            backgroundColor:"#272727", 
                            borderRadius:"30px",
                            fontSize:30,
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal",
                            paddingTop:6
                        }}  border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">{"SPONSOR US"}</button>
<hr style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>

</form>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_donations" />
<input type="hidden" name="business" value="KJGRWHTL73V5J" />
<input type="hidden" name="currency_code" value="GBP" />
<input type="hidden" name="amount" value="250" />

<button style={
                        {
                            textAlign:"center", 
                            width:"80%", 
                            height:"30",
                            color:"white", 
                            backgroundColor:"#272727", 
                            borderRadius:"30px",
                            fontSize:30,
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal",
                            paddingTop:6
                        }}  border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">{"JOIN THE 250 CLUB"}</button>


</form>
<hr style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <a onClick={() => this.itemClicked()} href={"/#Cause"} id="about" style={{color:"white"}} className="menu-item" >
          <h3>CAUSE</h3>
          </a>


            
          
          <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <a onClick={() => this.itemClicked()} href={"/#Challenges"} id="contact" style={{color:"white"}} className="menu-item">
          <h3>EVENTS</h3></a>
                    <hr  style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          
          <a href={"https://www.instagram.com/dorabros/?hl=en"} id="contact" target="_blank" style={{color:"white"}} className="menu-item">
          <h3>FOLLOW US</h3>
          </a>
          <hr style={{backgroundColor:"white", width:"80%", float:"left", height:1}}/>
          <Link to="/corporateSponsorship">
                        <div 
                        className="menu-item" style={
                            {
                                color:"white"
                            }
                        }>
                                <h3>CORPORATE SPONSORS</h3>
                        </div>
                        </Link>

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

          <br />
          <br />
          <br />
          <div style={{}}><img style={{width:220, height:135}} src={TCT}/></div>

        </Menu>*/



/*          */