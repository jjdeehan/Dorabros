import React, {Component} from 'react';
import header from '../images/ocean.jpg'
import {SPONSORSHIP_SECOND_LEVEL_CONST, SPONSORSHIP_CORPORATE_CONST } from '../constants/navbarConstants'
import ocean from '../images/ocean.jpg'
import ocean2 from '../images/ocean2.jpg'


export default class Sponsorship extends Component {
    constructor(){
        super()
    }

    componentWillMount(){
        this.props.updateHeaderImage(header)
    }


  render(){
    return(
      <div>
          <br/>
        <h1 className="TITLE" style={{textAlign:"center"}}>
        <a style={{color:"black"}}>SPONSORSHIP</a></h1>
        <hr style={{width:"50%"}}/>
        <div style={{width:"100%"}}>
            <div>
                <br/>
                <br/>
                    <div>
                    <a>
                    <button 
                        onClick={() => this.props.updatePage(SPONSORSHIP_SECOND_LEVEL_CONST, ocean)}
                        className="btn " 
                    style={
                        {
                            textAlign:"center", 
                            marginLeft:"30%", 
                            color:"white", 
                            backgroundColor:"#272727", 
                            borderRadius:"30px",
                            padding:"10px",
                            width:"40%",
                            fontSize:20,
                            selectable:false,
                            pointer:"cursor",
                            whiteSpace:"normal"
                        }
                    }>
                            {"HELP US GET TO THE START LINE"}
                    </button>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <a href={"https://uk.virginmoneygiving.com/fundraiser-display/showROFundraiserPage?userUrl=Dorabros&pageUrl=2&isTeam=true"} target="_blank">
                        <button
                        className="btn " style={
                            {
                                textAlign:"center", 
                                marginLeft:"30%", 
                                color:"white", 
                                backgroundColor:"#272727", 
                                borderRadius:"30px",
                                padding:"10px",
                                width:"40%",
                                fontSize:20,
                                selectable:false,
                                pointer:"cursor",
                                whiteSpace:"normal"
                            }
                        }>
                                {"DONATE TO THE TEENAGE CANCER TRUST"}
                        </button>
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <a href="/#svg">
                        <button onClick={() => this.props.updatePage(SPONSORSHIP_CORPORATE_CONST, ocean2)}
                        className="btn " style={
                            {
                                textAlign:"center", 
                                marginLeft:"30%", 
                                color:"white", 
                                backgroundColor:"#272727", 
                                borderRadius:"30px",
                                padding:"10px",
                                width:"40%",
                                fontSize:20,
                                selectable:false,
                                pointer:"cursor",
                                whiteSpace:"normal"
                            }
                        }>
                                {"CORPORATE SPONSORS"}
                        </button>
                    </a>
                    </div>
            </div>
        </div>
        <br />
        <br />        
        <br />
        <br />
      </div>
    )
  }
}
