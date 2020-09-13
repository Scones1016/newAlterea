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
            These are dark times, agent. Dr. Disinfo needs to be stopped before he poisons the national supply of Hawaiian pizza. That’s why, for the first time in history, U.M.B.R.A. and O.R.A.C.L.E. — two elite rival spy agencies — are teaming up. We’re each looking for a very particular type of agent, and are very excited to see what you’re made of. 
          </p>
          <p className="text mt-4">Today, we’ll be putting you through our Virtual Mission Simulator. It’s nothing to worry about: just a few straight-forward spy questions. No pressure, but both U.M.B.R.A. and O.R.A.C.L.E. will be watching closely. Play your cards right, and you could end up a member of one of these two powerful agencies. Good luck!</p>
          <button onClick={this.redirectToWelcome} className="missionButton mt-3">Enter the Virtual Mission Simulator</button>
        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default WelcomeRecruit;
