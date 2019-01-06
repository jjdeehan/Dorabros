import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export default class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			index: 0,
			imageSource: props.imageSource,
      hovering:false,
      onText:false
    }
    this.shade = this.shade.bind(this)
    this.removeShade = this.removeShade.bind(this)
	}

  shade(){
    this.setState({hovering:true})
  }

  removeShade(){
    this.setState({hovering:false})
  }

  render(){
    console.log(this.props.person)
    return(
      <div className="col-md-3"  style={{textAlign:"center", lineHeight:1.5, cursor:"pointer"}}
            onMouseOut={this.removeShade} onMouseOver={this.shade} >
        <div  id={this.props.person.name} 
        
            onClick={() => this.props.clicked(this.props.person.name)}
            >
          <img  style={{minWidth:"200px"}} className="img-thumbnail shade-on-hover" src={this.props.imageSource}
            />

              <div  style={{
                color:"black",
                fontSize:20,
              }}>
              <div>
              {this.props.person.name}
              </div>
              <br />
              <div>
              <img src={this.props.person.flag} style={{width:100}}/>
              </div>
              <div>
              {this.state.hovering && "READ MORE"}
              {!this.state.hovering && <div style={{visibility:"hidden"}}>"READ MORE"</div>}
              </div>

            <br/></div>

        </div>
      </div>
    )
  }
}
