import React, { Component } from 'react';
import logo from './logo.svg';
import './quiz.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class QuizIntro extends Component {
  constructor(props) {
    super(props);
    this.redirectToQuiz = this.redirectToQuiz.bind(this);
  }

  redirectToQuiz() {
    this.props.history.push(
      '/quiz',
      { email: this.props.location.state.email}
    );
  }

  render() {
    console.log("email in quiz intro");
    console.log(this.props.location.state.email);
    return (
      <div className="container">
        <div className="card cardBeforeYouBegin">

          <p className="quizQuestion">Welcome to the <span className="highlight">Virtual Training Simulation</span>. Recent intel suggests Dr. Disinfo has been planning something to do with pineapples and pizzas in his secret hideout within his fancy hotel in downtown Los Angeles. Your mission is to <span className="highlight">infiltrate Dr. Disinfo’s penthouse hotel suite</span> and foil his plans. Intel shows he owns the hotel and uses it as a cover for his operations, so trust nobody.</p>

            <button onClick={this.redirectToQuiz} class="proceedButton">PROCEED</button>

        </div>

      </div> 
    );
  }
}

export default QuizIntro;
