import React, {Component} from 'react';


export default class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			index: 0,
			imageSource: props.imageSource
		}
		this.toggleImage = this.toggleImage.bind(this)
	}

	toggleImage(){
		/*if(this.state.index){
			this.setState({index: 0, imageSource: this.props.imageSource[0]})
		} else {
			this.setState({index: 1, imageSource: this.props.imageSource[1]})
		}*/
	}

  render(){
    console.log(this.props.person.IG_Link)
    return(
      <div  className="col-lg-6" style={{lineHeight:1.5}}>
      
      <div>
<a href={this.props.person.IG_Link} target="_blank">
      <img style={{minWidth:"200px"}} className="img-thumbnail" src={this.state.imageSource} onMouseOver={this.toggleImage} onMouseOut={this.toggleImage}/>
      </a>
      
      <h4 style={{textAlign:"center", fontSize:"20pt"}}>{this.props.person.name}</h4>
      <br/>
      
      {
        this.props.person.age && <div>
        <b>{"Age:"}</b>
        {this.props.person.age && "    "+this.props.person.age}<br/>
        </div>
      }
      
      {
        this.props.person.job && <div>
        <b>{"Job:"}</b>
        {"    "+this.props.person.job}<br/>
        </div>
      }
      {this.props.person.crewmatesDescription && <div>
        <b>{"Crewmates' description:"}</b>
        {"    "+this.props.person.crewmatesDescription}<br/>
        </div>
      }
      
      {this.props.person.dreading && <div>
        <b>{"Dreading:"}</b>
        {"    "+this.props.person.dreading}<br/>
        </div>
      }
      
      {this.props.person.desertIslandDisk &&
        <div>
        <b>{"Desert Island Disk:"}</b>
        {"    "+this.props.person.desertIslandDisk}<br/>
        </div>
      }

      {this.props.person.goingToStruggleWithout &&
        <div>
        <b>{"Going to struggle without:"}</b>
        {"    "+this.props.person.goingToStruggleWithout}<br/>
        </div>
      }

      {this.props.person.favouriteMovie &&
        <div>
        <b>{"Favourite Movie:"}</b>
        {"    "+this.props.person.favouriteMovie}
        </div>
      }      {this.props.person.greatestFear &&
        <div>
        <b>{"Greatest fear:"}</b>
        {"    "+this.props.person.greatestFear}
        </div>
      }
      <br />
      </div>

      </div>
    )
  }
}
