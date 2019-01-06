// CheckoutForm.js
import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import fetch from 'isomorphic-unfetch';
// import AddressSection from './AddressSection';
// import CardSection from './CardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          complete: false,
          ticketTotal:0,
          buttonDisabled:false,
          email:null,
          error:false
        };
        this.submit = this.submit.bind(this);
        this.updateTicketTotal = this.updateTicketTotal.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
    }

    async submit(ev) {
        this.setState({buttonDisabled:true})
        this.props.stripe.createToken({ Name: "BallDinner" })
            .then(token => {
                console.log(token)
                fetch("https://r18s0o9z1d.execute-api.us-east-1.amazonaws.com/Prod/", {
                        method: "POST",
                        body: JSON.stringify({
                            token,
                            charge: {
                                amount: this.state.ticketTotal*15000,
                                currency: "GBP",
                            },
                            email:this.state.email,
                            product:"DinnerTicket"
                        })

                    })
                    .then(el => {
                        this.setState({complete:true})
                    })
                    .catch(err => {

                    	this.setState({
                    		error:true,
                    		buttonDisabled:false
                    	})
                    	console.error(err)
                    })
            })
            .catch(console.error)
    }

    updateTicketTotal(ev){
      this.setState({buttonDisabled:false,ticketTotal:parseInt(ev.target.value), error:false})
    }

    updateEmail(ev){
    	this.setState({buttonDisabled:false, email:ev.target.value, error:false})
    }

render() {
    return (
        <div className="container">
        <div className="checkout">
        <br />
        <br />
        <br />
        <br />
        { this.state.complete && <div style={{textAlign:"center"}}><h1>Purchase Complete</h1><h3>We look forward to welcoming you to the Ball</h3></div>}
        { !this.state.complete &&
          <div>
            <div style={{textAlign:"center"}}>
              <h1>Purchase Tickets</h1>
              <br/>
              <br/>
              </div>
              <div style={{textAlign:"center", display:"block", margin:"auto", maxWidth:600}}>
              <div className="StripeElement">
                <input placeholder="Number of tickets" type="number" style={{border:"none"}} onChange={this.updateTicketTotal}></input>
              </div>
              <br />
              <div className="StripeElement">
                <input placeholder="email address" type="email" style={{border:"none"}} onChange={this.updateEmail}></input>
              </div>
              <br />
              <br />
              <br />
              <br />
              	{"£ ".concat((this.state.ticketTotal * 150).toString())}
              </div>
              <br />
              <div style={{display:"block", margin:"auto", maxWidth:600}}>
              <CardElement/>
              </div>
              <br />
              <br />
              <br />

            <div style={{textAlign:"center"}}>
            {this.state.error &&
            <h6 style={{color:"red"}}>Problem with payment, please check your details and try again</h6>}
                <button className="StripeElement" disabled={this.state.buttonDisabled} style={{display:"inline-block", margin:"auto", fontSize:20}} onClick={this.submit}>Purchase</button>
            </div>
          </div>
        }
        </div>
        </div>
    );
}
}

export default injectStripe(CheckoutForm)
