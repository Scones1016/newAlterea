import React from 'react';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class AnswerDescription extends Component {
    constructor(props) {
        super(props);
        this.returnToNextQuestion = this.returnToNextQuestion.bind(this);
    }

    returnToNextQuestion() {
        this.props.changeToNextQuestion();
    }

    render() {
        return (
            <div className="container">
                <div className="card cardBeforeYouBegin">
                    <p className="quizChosenAnswer">{this.props.answer}</p>
                    <p className="quizDescription">{this.props.message}</p>
                    <button className="proceedButton" onClick={this.returnToNextQuestion}>Continue</button>
                </div>
            </div>
        );
    }
}

export default AnswerDescription;