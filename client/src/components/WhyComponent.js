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
      	<div style={{color:"rgba(0,0,0,0.5)", textAlign:"center", fontSize:20, width:"80%", margin:"auto"}}>
{"The boys have visited the Teenage Cancer Trust unit at the University College Hospital in London, where they met young people who are taking on the biggest challenge of their lives. They were moved by their courage and that is why they are raising money to help support every young person. In their eyes, anyone who has suffered from cancer has faced more than what the Sahara and Atlantic will throw at them. They are racing for those who can’t."}
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
      <div style={{fontSize:20}}>
      {"Everything the Dorabros are doing is in aid of the Teenage Cancer Trust. They are aiming to raise £100 000, as a minimum, to finance and support a new treatment unit at the UCLH Macmillan Cancer Centre in London."}
      </div>
      <br />
      <br />

      <a href='http://www.justgiving.com/Dorabros' target="_blank">
                  <div style={{ 
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
        <div style={{ 
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
      {"The Dorabros will be raising money for Teenage Cancer Trust as they take on these many epic challenges. Being diagnosed with cancer as a teenager is very different to being diagnosed as child or older person."}
      </div>
      <br />
      <br />
      <div style={{fontSize:20, width:"80%", margin:"auto"}}>
      {"Teenage Cancer Trust are the only charity that provide specialist nursing care and emotional support for young people from the point of diagnosis throughout treatment. Your donation will go a long way in bettering these young individuals care."}
      </div>
      </div>
    )
  }
}

