import React from 'react';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AnswerDescription from './AnswerDescription';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered : this.props.isAnswered,
            showMessage : false,
            selectedAnswer: this.props.selectedAnswer,
            bgColor: "coral"
        }
        this.setAnswer = this.setAnswer.bind(this);
        this.changeToMessage = this.changeToMessage.bind(this);
    }

    setAnswer(selectedAnswer) {
        console.log("SET ASNWER");
        this.setState({ 
            selectedAnswer: selectedAnswer
        });
        console.log(this.state.selectedAnswer);
    }

    changeToMessage() {
        console.log("CHANGE TO MESSAGE");
        console.log(this.state.selectedAnswer);
        const answerIndex = this.state.selectedAnswer;
        if(this.state.selectedAnswer != 5) {
            console.log("AB CHANGE KRO");
            console.log(this.state.isAnswered);
            this.props.disappearQuestion(answerIndex);
        }
    }

    render() {
        console.log("RENDERING");
        console.log(this.state.selectedAnswer);
        let { answers, messages } = this.props;
        let { isAnswered } = this.state;
        let {selectedAnswer } = this.state;
        return (
            <div>
                <div className={this.state.selectedAnswer === 0 ? 'quizSelectedColor': 'quizDefaultColor'} onClick={this.setAnswer.bind(this, 0)}>{answers[0]}</div>
                <div className={this.state.selectedAnswer === 1 ? 'quizSelectedColor': 'quizDefaultColor'} onClick={this.setAnswer.bind(this, 1)}>{answers[1]}</div>
                <div className={this.state.selectedAnswer === 2 ? 'quizSelectedColor': 'quizDefaultColor'} onClick={this.setAnswer.bind(this, 2)}>{answers[2]}</div>
                <div className={this.state.selectedAnswer === 3 ? 'quizSelectedColor': 'quizDefaultColor'} onClick={this.setAnswer.bind(this, 3)}>{answers[3]}</div>
                <br/>
                <br/>
                <button className="proceedButton mt-3" onClick={this.changeToMessage}>Are you sure?</button>
            </div>
        );
    }
}

export default Answers;