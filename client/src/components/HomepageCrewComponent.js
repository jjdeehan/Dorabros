import React, {Component} from 'react';
import HomepageTitle from '../containers/HomepageTitleContainer'
import Crew from './CrewComponent'
const TCTLogo = "http://dorabros.s3-website-us-east-1.amazonaws.com/images/InAidOf_TCT.jpg";



export default class HomepageCrew extends Component {
  render(){
    return(
      <div id="Crew" className="container" style={{textAlign:"center"}}>
      <h1 className="TITLE" style={{textAlign:"center"}}>
		            <div href="/" style={{color:"black"}}>TEAM</div></h1>
		            <hr style={{width:"50%"}}/>
      <Crew />
      <h1 className="TITLE" style={{textAlign:"center"}}>
                <a href="/" style={{color:"black"}}>WHY</a></h1>
                <hr style={{width:"50%"}}/>
      
                    <div className="blockquote text-center text-block" style={{"textAlign":"center",color:"rgba(0,0,0,0.5)", width:"70%", margin:"auto"}} ><div><img src={
          TCTLogo} style={{height:"50%", width:"55%"}} /></div>
          </div>
          <a href="https://www.teenagecancertrust.org/" target="_blank" >
          <div style={{"textAlign":"center",color:"rgba(0,0,0,0.5)", width:"70%", margin:"auto", fontSize:20}}>
          <br />“In the UK every day 7 teenagers between the ages of 13 – 24 are diagnosed with cancer. They need treatment and support from the moment they first hear ‘cancer’. Teenage Cancer Trust is the only charity dedicated to making this happen.”
        <br />
        </div>
        <br />

        
        
            <br />
            <br />
            <br />
            <br />
            <br />
            
          </a>
          <a href='http://www.justgiving.com/Dorabros' target="_blank">
                  <div className="donateButton" style={{ 
                      margin:"auto",
                            display:"inline-block",
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
                            paddingLeft:30,
                            paddingRight:30,
                            paddingBottom:10
                          }}>DONATE WITH JUST GIVING</div></div>
                          </a>
                          <br />
                          <hr style={{width:"30%"}}/>
                          <br />
                          <a href="https://uk.virginmoneygiving.com/Team/Dorabros" target="_blank">
        <div className="donateButton" style={{ 
          margin:"auto",
                            display:"inline-block",
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
                            paddingLeft:30,
                            paddingRight:30,
                            paddingBottom:10
                          }}>DONATE WITH VIRGIN MONEY</div></div>
                          </a>
                          <br />
                          <br />
      </div>
    )
  }
}
