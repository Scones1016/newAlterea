import React, { Component } from 'react';
import logo from './logo.svg';
import './quiz.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class BeforeYouBegin extends Component {
  constructor(props) {
    super(props);
    this.redirectToWelcome = this.redirectToWelcome.bind(this);
  }

  redirectToWelcome() {
    this.props.history.push(
      '/welcome',
      { email: this.props.location.state.email }
    );
  }


  render() {
    console.log(this.props.location.state.email);
    return (
      <div className="container">
        <div className="card cardBeforeYouBegin">
          <h1 className="title">BEFORE YOU BEGIN...</h1>
          <p className="text mt-4">
            Welcome, once again, <span className="highlight">Agent.</span> <br></br>
            Welcome, once again, Agent. <br></br>
          We're excited that you're here! <br></br>
          Before we proceed, we need to perform an  <span className="highlight">analysis of your personality</span>, in order to put you into the training environments best suited to you. Our handy algorithm is here to help: sit back, relax, and let the answer flow as naturally from you as possible! <br></br>
          </p>
          <button onClick={this.redirectToWelcome} className="proceedButton mt-3">proceed now.</button>
        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default BeforeYouBegin;
