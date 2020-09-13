import React, { Component } from 'react';
import logo from './logo.svg';
import './quiz.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class WelcomeRecruit extends Component {
  constructor(props) {
    super(props);
    this.redirectToWelcome = this.redirectToWelcome.bind(this);
  }

  redirectToWelcome() {
    this.props.history.push(
      '/quizIntro',
      { email: this.props.location.state.email}
    );
  }


  render() {
    console.log(this.props.location.state.email);
    return (
      <div className="container">
        <div className="card cardBeforeYouBegin">
          <h1 className="title">Welcome Recruit</h1>
          <p className="text mt-4">
            We're glad to see you got our message Recruit. Dr. Disinfo has threatened the world with a great and terrible evil. He has threatened to poison Pineapple Pizza. The madman! 
          </p>
          <p className="text mt-4">Before we take on the REAL Dr. Disinfo, we need to have you take on our virtual Dr. Disinfo. We will put you through our Virtual Simulation Program to determine which agency you belong in. First we have U.M.B.R.A., the elite agency who prefers to keep things classic. Then we have O.R.A.C.L.E., the visionaries who use new-age techniques and technologies. Both are fine Agencies and we know you'll excel in either one. Good luck recruit.</p>
          <button onClick={this.redirectToWelcome} className="missionButton mt-3">Enter the Mission Simulation Program</button>
        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default WelcomeRecruit;
