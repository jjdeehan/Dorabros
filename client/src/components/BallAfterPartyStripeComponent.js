import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import CheckoutForm from './CheckoutFormAfterParty';


export default class MyStoreCheckout extends React.Component {
    constructor() {
    super();
    this.state = {stripe: null};
  }
  
  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_live_ap2be9f403GDgOA2hF7JG6IX')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_live_ap2be9f403GDgOA2hF7JG6IX')});
      });
    }
  }

  render() {
    
    return (
    	<StripeProvider apiKey="pk_live_ap2be9f403GDgOA2hF7JG6IX">
        <div className="example">
          <Elements>
              <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}



