import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';


export default class MyStoreCheckout extends React.Component {
    constructor() {
    super();
    this.state = {stripe: null};
  }
  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_live_JgVijcvHpBaH1rY5hUHcvvZs')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_live_JgVijcvHpBaH1rY5hUHcvvZs')});
      });
    }
  }

  render() {
    return (
    	<StripeProvider apiKey="pk_live_JgVijcvHpBaH1rY5hUHcvvZs">
        <div className="example">
          <Elements>
              <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}



