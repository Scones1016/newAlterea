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
    return (
      <div className="container">
        <div className="card cardBeforeYouBegin">

          <p className="quizQuestion">Welcome to the <span className="highlight">Virtual Training Simulation</span>. Recent intel suggests Dr. Disinfo is almost ready to carry out his Hawaiian pizza strike. Your mission: <span className="highlight">find him and stop him before it’s too late.</span> We’ve tracked him to the Deluxe Hotel in Downtown Los Angeles. Everyone knows DH really stands for “Disinfo Headquarters”. The place is crawling with his cronies. </p>

            <button onClick={this.redirectToQuiz} class="proceedButton">proceed now.</button>

        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div> 

      </div> 
    );
  }
}

export default QuizIntro;
