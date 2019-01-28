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
          donationTotal:0,
          buttonDisabled:false,
          email:"",
          message:"",
          name:""
        };
        this.submit = this.submit.bind(this);
        this.updateDonationTotal = this.updateDonationTotal.bind(this)
        this.updateMessage = this.updateMessage.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateName = this.updateName.bind(this)
    }

    async submit(ev) {
        this.setState({buttonDisabled:true})
        this.props.stripe.createToken({ Name: "Donation" })
            .then(token => {
                console.log(token)
                fetch("https://r18s0o9z1d.execute-api.us-east-1.amazonaws.com/Prod/", {
                        method: "POST",
                        body: JSON.stringify({
                            token,
                            product:"Donation",
                            charge: {
                                amount: this.state.donationTotal*100,
                                currency: "GBP"
                            },
                            email:this.state.email,
                            metadata:{
                              email:this.state.email,
                              message:this.state.message,
                              name:this.state.name
                            }
                        })

                    })
                    .then(el => {
                        this.setState({complete:true})
                    })
                    .catch(console.error)
            })
            .catch(console.error)
    }

    updateDonationTotal(ev){

      this.setState({buttonDisabled:false,donationTotal:ev.target.value})
    }

    updateEmail(ev){
      this.setState({email:ev.target.value})
    }

    updateMessage(ev){
      this.setState({message:ev.target.value})
    }
    updateName(ev){
      this.setState({name:ev.target.value})
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
        { this.state.complete && <div style={{textAlign:"center"}}><h1>Donation Complete</h1><br /><h3>Thank you so much</h3><br /><h3>We couldn't do it without you!</h3></div>}
        { !this.state.complete &&
          <div>
            <div style={{textAlign:"center"}}>
              <h1>Help us get to the start line</h1>
              <br />
              <h5>We wouldn't be able to do this without you</h5>
              <br/>
              <h5>250 Club - For donations over £250, we will put your name on our boat</h5>
              <br/>
              <div className="StripeElement" style={{display:"inline-block", minWidth:300}}>
              <input placeholder="Name" type="text" style={{minWidth:410,border:"none"}} onChange={this.updateName}></input>
              </div>
              <br/>
              <br/>
              <div className="StripeElement" style={{display:"inline-block", minWidth:300}}>
              <input placeholder="Email address" type="email" style={{minWidth:410,border:"none"}} onChange={this.updateEmail}></input>
              </div>
              <br/>
              <br/>
              <div className="StripeElement" style={{display:"inline-block", minWidth:300}}>
              <input placeholder="Optional message" type="text" style={{minWidth:410,border:"none"}} onChange={this.updateMessage}></input>
              </div>
              <br/>
              <br/>
              <div className="StripeElement" style={{display:"inline-block"}}>
                {"£  "}<input placeholder="0.00" type="number" style={{border:"none", minWidth:200}} onChange={this.updateDonationTotal}></input>
              </div>


              <h4></h4>
            </div>
              <br />
              <br />
              <br />
              <div style={{display:"block", margin:"auto", maxWidth:600}}>
              <CardElement/>
              </div>
              <br />
              <br />
              <br />
            <div style={{textAlign:"center"}}>
                <button className="StripeElement" disabled={this.state.buttonDisabled} style={{display:"inline-block", margin:"auto", fontSize:20}} onClick={this.submit}>Donate</button>
            </div>
            <br />
            <br />
            <br />
            <div style={{textAlign:"center"}}>
              <h1>Unsure what to give?</h1>
              <br />
              <div style={{width:"80%", margin:"auto"}}>
              <h5>All Donations will be gratefully appreciated. </h5>
              <br />
              <h5>The following is an indication of our current costs</h5>
              </div>
              <br />
              <br />
              <br />
                <ul className="list-group" style={{maxWidth:600, margin:"auto"}}>
                <li className="list-group-item d-flex justify-content-between align-items-center">Rowing Gate<span className="badge badge-pill"> £32 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Foot plate<span className="badge badge-pill"> £58</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">One day worth of food<span className="badge badge-pill"> £100 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Handheld VHF Radio<span className="badge badge-pill"> £104</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Handheld GPS<span className="badge badge-pill"> £159</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Life Jacket<span className="badge badge-pill"> £199</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">VHF Radio<span className="badge badge-pill"> £200 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Distress Flares<span className="badge badge-pill">£230 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Sea Anchor<span className="badge badge-pill"> £229</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Sliding Rowing Seat<span className="badge badge-pill"> £234</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Solar Panels<span className="badge badge-pill"> £378 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Wind gauge<span className="badge badge-pill"> £450</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">GPS Unit<span className="badge badge-pill"> £459 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">AIS Location System<span className="badge badge-pill"> £514 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Waterproof Survival Suit<span className="badge badge-pill"> £518</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Emergency Locator Beacon EPIRB<span className="badge badge-pill"> £671 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Satellite Phone<span className="badge badge-pill"> £924</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Life Raft<span className="badge badge-pill"> £1,299</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Boat Trailer<span className="badge badge-pill"> £2,500 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Water Maker<span className="badge badge-pill"> £3,500</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Food for the entire crossing<span className="badge badge-pill"> £6,000 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Race entry<span className="badge badge-pill"> £20,000 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Boat<span className="badge badge-pill"> £50,000 </span></li>
              </ul>
            </div>
          </div>
        }
        </div>
        </div>
    );
}
}


export default injectStripe(CheckoutForm)


