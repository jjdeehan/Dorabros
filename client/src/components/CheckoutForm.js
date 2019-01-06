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
          buttonDisabled:false
        };
        this.submit = this.submit.bind(this);
        this.updateDonationTotal = this.updateDonationTotal.bind(this)
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
                            charge: {
                                amount: this.state.donationTotal*100,
                                currency: "GBP",
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
        { this.state.complete && <div style={{textAlign:"center"}}><h1>Donation Complete</h1></div>}
        { !this.state.complete &&
          <div>
            <div style={{textAlign:"center"}}>
              <h1>Help us get to the start line</h1>
              <h3>We wouldn't be able to do this without you</h3>
              <br/>
              <br/>
              <div className="StripeElement" style={{display:"inline-block"}}>
                {"£  "}<input placeholder="0.00" type="number" style={{border:"none"}} onChange={this.updateDonationTotal}></input>
              </div>
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
              <br />
              <br />
                <ul className="list-group" style={{maxWidth:600, margin:"auto"}}>
                <li className="list-group-item d-flex justify-content-between align-items-center">One day worth of food<span className="badge badge-pill"> £100 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Food for the entire crossing<span className="badge badge-pill"> £6,000 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Life Raft<span className="badge badge-pill"> £1,299</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Emergency Locator Beacon EPIRB<span className="badge badge-pill"> £671 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Waterproof Survival Suit<span className="badge badge-pill"> £518</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Distress Flares<span className="badge badge-pill">£230 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Life Jacket<span className="badge badge-pill"> £199</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Water Maker<span className="badge badge-pill"> £3,500</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">AIS Location System<span className="badge badge-pill"> £514 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Satellite Phone<span className="badge badge-pill"> £924</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">VHF Radio<span className="badge badge-pill"> £200 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Handheld VHF Radio<span className="badge badge-pill"> £104</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">GPS Unit<span className="badge badge-pill"> £459 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Handheld GPS<span className="badge badge-pill"> £159</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Sliding Rowing Seat<span className="badge badge-pill"> £234</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Foot plate<span className="badge badge-pill"> £58</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Rowing Gate<span className="badge badge-pill"> £32 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Sea Anchor<span className="badge badge-pill"> £229</span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Solar Panels<span className="badge badge-pill"> £378 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Boat Trailer<span className="badge badge-pill"> £2,500 </span></li>
                <li className="list-group-item d-flex justify-content-between align-items-center">Wind gauge<span className="badge badge-pill"> £450</span></li>
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


