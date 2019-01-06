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
        this.props.stripe.createToken({ Name: "AfterParty" })
            .then(token => {
                console.log(token)
                fetch("https://r18s0o9z1d.execute-api.us-east-1.amazonaws.com/Prod/", {
                        method: "POST",
                        body: JSON.stringify({
                            token,
                            charge: {
                                amount: this.state.ticketTotal*3000,
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


// if (response.ok) console.log("Purchase Complete!")

// if (response.ok) this.setState({complete: true});


render() {
    return (
        <div className="container">
        <div className="checkout">
        <br />
        <br />
        <br />
        <br />
        { this.state.complete && <div style={{textAlign:"center"}}><h1>Purchase Complete</h1><h3>We look forward to welcoming you to the Dorabros May Ball After Party</h3></div>}
        { !this.state.complete &&
          <div>
            <div style={{textAlign:"center"}}>
              <h1>Purchase Tickets</h1>
              <br/>
              <br/>
              <div className="StripeElement" style={{display:"inline-block", maxWidth:1000}}>
                <input placeholder="Number of tickets" type="number" style={{border:"none",maxWidth:1000}} onChange={this.updateTicketTotal}></input>
              </div>
              <br />
              <div className="StripeElement" style={{display:"inline-block", maxWidth:1000}}>
                <input placeholder="email address" type="email" style={{border:"none",maxWidth:1000}} onChange={this.updateEmail}></input>
              </div>
              <br />
            </div>
              <br />
              <br />
              <br />
              <div style={{textAlign:"center", display:"block", margin:"auto"}}>
              	{"£ ".concat((this.state.ticketTotal * 30).toString())}
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
