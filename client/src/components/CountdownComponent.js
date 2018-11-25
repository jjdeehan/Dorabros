import React, { PropTypes, Component } from 'react';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentWillMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(new Date(2019,12,13));
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
    <div style={{ height:"55px"}} className="row">
      <div className="row" style={{float:"none", margin:"0 auto", paddingTop:"20px"}}>
   
        
          <div className="col-" style={{textAlign:"center"}} >
              <div style={{color:"white", fontSize:30, fontWeight:"bold"}}>{this.addLeadingZeros(countDown.days + 365*countDown.years - 32)}</div>
              <div style={{color:"white"}}>{countDown.days === 1 ? ' Day ' : ' Days '}</div>
          </div>

        
          <div className="col-" style={{textAlign:"center", paddingLeft:20}}>
            <div style={{color:"white", fontSize:30, fontWeight:"bold"}}>{this.addLeadingZeros(countDown.hours+5)}</div>
            <div style={{color:"white"}}>{" Hours "}</div>
          </div>


        
          <div className="col-" style={{textAlign:"center", paddingLeft:20}}>
            <div style={{color:"white", fontSize:30, fontWeight:"bold"}}>{this.addLeadingZeros(countDown.min)}</div>
            <div style={{color:"white"}}>{" Min "}</div>
          </div>

        
          <div className="col-" style={{textAlign:"center", paddingLeft:20}}>
            <div style={{color:"white", fontSize:30, fontWeight:"bold"}}>{this.addLeadingZeros(countDown.sec)}</div>
            <div style={{color:"white"}}>{" Sec "}</div>
          </div>
      </div>
    </div>
    );
  }
}

/*Countdown.propTypes = {
  date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};*/

