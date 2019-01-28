import React, {Component} from 'react';
import YouTube from 'react-youtube'


export default class Template extends Component {
  render(){
    return(
      <div className="container" style={{textAlign:"center"}}>
	      <h1>
		      <a href="/" style={{color:"black", width:"100%"}}>
		      	CAUSE
		      </a>
	      </h1>
            <hr style={{width:"50%"}}/>
      	<div style={{textAlign:"justify", fontSize:20, width:"80%", margin:"auto"}}>
{"The boys have visited the Teenage Cancer Trust unit at the University College Hospital in London. There, they met young people who are facing the greatest challenge of their lives. They were moved by their courage and that is why they are raising money to help support this incredibly worthy cause. In their eyes, anyone who has suffered from cancer has faced more than the Sahara or Atlantic could throw at them. They are racing for those who can’t."}
      	</div>
      	<br />
      	<br />
      	<br />
      	<YouTube
        videoId={"7kKoXUxWLTk"}                  // defaults -> null
        id={"rtf"}                       // defaults -> null      // defaults -> ''
      />
      <br/>
      <br/>
      <br/>
      <div style={{fontSize:20, width:"80%", textAlign:"center", margin:"auto"}}>
      {"Everything the Dorabros are doing is in aid of the Teenage Cancer Trust. They are aiming to raise"}
      <br />
      <br />
    {"£100,000"} 
    <br />
    <br />
    {"This will finance and support a new treatment unit at the UCLH Macmillan Cancer Centre in London."}
      </div>
      <br />
      <br />

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
                          <br/>
                          <br/>
                          <br/>
                                <div style={{fontSize:20, width:"80%", margin:"auto"}}>
      </div>

      <div style={{fontSize:20, width:"80%", margin:"auto"}}>
      {"The Teenage Cancer Trust is the only charity that provides specialist nursing care and emotional support for young people from the point of diagnosis, through treatment, to a hopeful recovery."}
      <br />
      <br />
      {"Every, single donation will help to improve the lives of these teenagers."}
      </div>
      </div>
    )
  }
}

