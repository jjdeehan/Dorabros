import React, {Component} from 'react';
import Instafeed from 'react-instafeed'
import {NavLink} from "mdbreact"

export default class Template extends Component {

  constructor(){
    super()
    this.state ={
      mounted:false
    }
  }

  componentDidMount () {
    this.setState({mounted:true})
  }

  render(){
    return(
    	      <div>
          <br/>
        <h1 className="TITLE" style={{textAlign:"center"}}>
        <a style={{color:"black"}}>WALL OF FAME</a></h1>
        <hr style={{width:"50%"}}/>
         
        <br />
        <br />
<div style={{color:"transparent", textAlign:"center"}} >
        
                  <NavLink style={{color:"white", fontSize:20}} onClick={this.itemClicked} to="/donate"><button style={{
                            margin:"auto",
                            color:"white", 
                            fontSize:19, 
                            textAlign:"center", 
                            borderRadius:"30px",
                            borderColor:"black",
                            backgroundColor:"black",
                            pointer:"cursor",
                            whiteSpace:"normal",
                            border:"solid",
                            cursor:"pointer",
                            display:"inline-block"


                          }} border="0" >
                          <div style={{
                            margin:"auto",
                            display:"block",
                            paddingTop:10,
                            paddingBottom:10,
                            paddingLeft:10,
                            paddingRight:10
                          }}>JOIN THE WALL OF FAME</div></button></NavLink>
                  </div>
                  <br />
                  <br />
<h3 style={{textAlign:"center"}}>{"WE COULDN'T DO IT WITHOUT YOU"}</h3>
        <br />
        <br />
        <br />
        <h4 style={{textAlign:"center", color:"rgba(0,0,0,0.6)"}}>THANK YOU TO</h4>  
            <div>
                <br/>
                      <div>
      <div style={{margin:"0 auto"}} className="container">
          <div id="instafeedTarget2" className="row">
      {!this.state.mounted && <Instafeed className="row"
        limit='30'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='least-recent'
        target={"instafeedTarget2"}
        userId='8560788676'

        clientId='b4745410941d4b4d838ad2e0ef10a014'
        accessToken='8560788676.1677ed0.0a7bfd97e2194ab089f6b7ee775938b8'
        template={`<div class='col-md-3' style="padding:10px"><img src='{{image}}' style='display:block;margin-right:auto;margin-left:auto;width:100%' class="img-responsive"/><div><div class='instafeed__item__overlay--inner'></div></div><br/><div style="color:black;">{{model.short_caption}}</div></div>`}
      />}
                          
        </div>

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
