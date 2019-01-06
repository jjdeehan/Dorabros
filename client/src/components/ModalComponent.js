import React, {Component} from 'react';
import Modal from 'react-modal'

Modal.setAppElement(document.createElement("div"))


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight: "70%",
    maxWidth:"80%",
    textStyle:"justify",
    float:"left",
    zIndex:1000
  }
};
export default class Template extends Component {

	constructor(props){
		super(props)
		this.state = {
			image:props.image,
			description:props.description,
			name:props.name,
			modalIsOpen:props.isOpen
		}
	   this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}



  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.toggleModal();
  }

  render(){
  	console.log(this.props)
    return(
      <div>
      <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <button onClick={this.closeModal} style={{position:"absolute",
          	top:10,right:10}}>x</button>
          	<img src={this.props.image} style={{maxWidth:200, display:"block",margin:"auto"}} />
            <br />
          <h2 ref={subtitle => this.subtitle = subtitle} style={{margin:"auto", display:"block", textAlign:"center"}}>{this.props.name}</h2>
          <hr style={{width:"50%"}} />
          <div style={{textAlign:"justify",fontSize:20}}>{this.props.description.map(el => <div><p>{el}<br /><br /></p><br/></div>)}</div>
          </Modal>
      </div>
    )
  }
}
