import React, { Component } from 'react';
import logo from './logo.svg';
import './quiz.css';

class QuizDavid extends Component {
  render() {
  return (
    <div className="container">
      
      <div className="card">

        <p className="quizQuestion">The infiltration team drops you off down the street from the hotel. You walk a few minutes and arrive. Before you lies the vast lobby of a ritzy hotel -- this is the one, alright. Now it’s just a matter of getting to Dr. Disinfo’s room. First, you need to figure out which penthouse suite belongs to him.</p>
        
        <label class="radio">
          <span class="radio__input">
            <input type="radio" name="radio"></input>
            <span class="radio__control"></span>
          </span>
          <span class="quizAnswer answer1">Threaten the concierge into telling you where Dr. Disinfo’s suite is.</span>
        </label>

        <br></br>
        <label class="radio">
          <span class="radio__input">
            <input type="radio" name="radio"></input>
            <span class="radio__control"></span>
          </span>
          <span class="quizAnswer answer2">Find a quiet corner and contact your team back at base.</span>
        </label>
        
        <br></br>
        <label class="radio">
          <span class="radio__input">
            <input type="radio" name="radio"></input>
            <span class="radio__control"></span>
          </span>
          <span class="quizAnswer answer3">Hack into the hotel’s database.</span>
        </label>

        <br></br>
        <label class="radio">
          <span class="radio__input">
            <input type="radio" name="radio"></input>
            <span class="radio__control"></span>
          </span>
          <span class="quizAnswer answer4">Offer a bellhop a bribe to let it slip.</span>
        </label>

      </div>

      <div className="footer">
        <p className="copyRight">&#169;Alterea Inc, 2020</p>
      </div> 

    </div> 
  );
}
}

export default QuizDavid;
