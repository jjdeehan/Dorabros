import React, {Component} from 'react';
import header from '../images/ocean.jpg'
import { SPONSORSHIP_SECOND_LEVEL_CONST, SPONSORSHIP_CORPORATE_CONST, HOMEPAGE_CONST, SPONSORSHIP_CONST } from '../constants/navbarConstants'
import ocean from '../images/ocean.jpg'
import ocean2 from '../images/ocean2.jpg'
import lads from '../images/dorabros.png'
import {Link, browserHistory} from 'react-router-dom';


export default class Sponsorship extends Component {
    constructor(){
        super()
    }

    componentWillMount(){
        this.props.updatePage(SPONSORSHIP_CONST, header)
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

                    <Link to="/sponsorship/dorabros">
                    <button 
                        
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
                    </Link>

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

                        <Link to="/sponsorship/corporate">
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
                                {"CORPORATE SPONSORS"}
                        </button>
                        </Link>

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
