import React, {Component} from 'react';
import HomepageTitle from '../containers/HomepageTitleContainer'
import Crew from './CrewComponent'
const TCTLogo = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/InAidOf_TCT.jpg";



export default class HomepageCrew extends Component {
  render(){
    return(
      <div id="Crew">
      <h1 className="TITLE" style={{textAlign:"center"}}>
		            <a href="/" style={{color:"black"}}>TEAM</a></h1>
		            <hr style={{width:"50%"}}/>
      <Crew />
      <h1 className="TITLE" style={{textAlign:"center"}}>
                <a href="/" style={{color:"black"}}>WHY</a></h1>
                <hr style={{width:"50%"}}/>
      <a href="https://www.teenagecancertrust.org/" target="_blank">
                    <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"black", width:"70%"}} ><div><img src={
          TCTLogo} style={{height:"50%", width:"55%"}} /></div><br />“In the UK every day 7 teenagers between the ages of 13 – 24 are diagnosed with cancer. They need treatment and support from the moment they first hear ‘cancer’. Teenage Cancer Trust is the only charity dedicated to making this happen.”
        <br />
        <br />

        </div>
        
            <br />
            <br />
            <br />
            <br />
            <br />
            
          </a>
          <a href='http://www.justgiving.com/Dorabros' target="_blank">
                  <div style={{ 
                    margin:"auto",
                                      width:"25%",
                            color:"white", 
                            fontSize:19, 
                            textAlign:"center", 
                            borderRadius:"30px",
                            borderColor:"black",
                            backgroundColor:"black",
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal",
                            border:"solid"

                          }}><div style={{
                            paddingTop:10,
                            paddingLeft:10,
                            paddingRight:10,
                            paddingBottom:10
                          }}>DONATE WITH JUST GIVING</div></div>
                          </a>
                          <br />
                          <hr style={{width:"30%"}}/>
                          <br />
                          <a href="https://uk.virginmoneygiving.com/Team/Dorabros" target="_blank">
        <div style={{ 
          margin:"auto",
                            width:"25%",
                            color:"white", 
                            fontSize:19, 
                            textAlign:"center", 
                            borderRadius:"30px",
                            borderColor:"black",
                            backgroundColor:"black",
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal",
                            border:"solid"

                          }}><div style={{
                            paddingTop:10,
                            paddingLeft:10,
                            paddingRight:10,
                            paddingBottom:10
                          }}>DONATE WITH VIRGIN MONEY</div></div>
                          </a>
                          <br />
                          <br />
      </div>
    )
  }
}
