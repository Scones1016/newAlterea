import React from 'react';
import QuestionData from './QuestionData';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import EachQuestion from './EachQuestion';
import QuizHome from './QuizHome';
import Answers from './Answers';
import AnswerDescription from './AnswerDescription';
import CalibratingCard from './CalibratingCard';
import Agency from './Agency';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: QuestionData.length,
            answerJsonFile: [],
            selectedAnswer: 5,
            isAnswered: false,
            finalQuestion: false,
            agency: '',
            agentName: '',
            calibratingMessage: 'CALIBRATING...'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.createAnswerJsonFile = this.createAnswerJsonFile.bind(this);
        this.disappearQuestion = this.disappearQuestion.bind(this);
        this.endQuiz = this.endQuiz.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: QuestionData[nr].question,
            answers: QuestionData[nr].answers,
            messages: QuestionData[nr].messages,
            nr: this.state.nr + 1
        });
    }

    createAnswerJsonFile(answerIndex) {
        this.setState({ selectedAnswer: answerIndex});
        //this.setState({ answerJsonFile: this.state.answerJsonFile.concat(answerIndex) })
        //if(this.state.nr === this.state.total) {
            //console.log(this.state.answerJsonFile);
        //}
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        this.setState({ 
            isAnswered: false,
            selectedAnswer: 5
        });
        let { nr, total } = this.state;
        if( nr != total) {
            this.pushData(nr);
        }
        else {
            this.endQuiz();
        }
    }

    endQuiz() {
        console.log(this.state.answerJsonFile);
        var userAnswers = {};
        userAnswers["email"] = this.props.location.state.email;
        userAnswers["answer"] = this.state.answerJsonFile;
        console.log("USER ANSWERS");
        console.log(userAnswers);
        var url = "https://backend-env.eba-zkuyd2ed.us-east-1.elasticbeanstalk.com/quiz";
        const axios = require('axios');
        axios.get(url, {
            params : userAnswers
        })
        .then(
            response=> {
                console.log("HELLO");
                console.log(response);
                console.log("DATA");
                console.log(response.data);
                var agency = response.data.agency;
                agency = agency.toUpperCase();
                var agencyArray = agency.split("").join('.');
                this.setState({
                    agency: agencyArray,
                    agentName: response.data.agentName
                })
            })
            .catch(e=>console.log(e))
        this.setState({ finalQuestion: true});
        setTimeout(() => this.setState({calibratingMessage:''}), 10000);
    }

    disappearQuestion(answerIndex) {
        this.setState({ 
            isAnswered: true,
            selectedAnswer: answerIndex
        });
        this.setState({ answerJsonFile: this.state.answerJsonFile.concat(answerIndex) })
    }

    render() {
        let { nr, total, question, answers, messages, isAnswered, selectedAnswer, finalQuestion } = this.state;
        console.log(this.state.agency);
        if(finalQuestion) {
            return (
                <div className="agencyContainer">
                    {this.state.calibratingMessage !== '' ? <CalibratingCard calibratingMessage={this.state.calibratingMessage}/> : <Agency agency={this.state.agency} agentName={this.state.agentName}/>}
                </div>
            );
        }
        else {
            if(!isAnswered) {
                return (
                    <div className="container">
                        <div className="card cardBeforeYouBegin">
                        <p className="quizQuestion">{question}</p>
                        <Answers answers={answers} messages={messages} isAnswered={this.questionAnswered} selectedAnswer={this.state.selectedAnswer} storeAnswer={this.createAnswerJsonFile} disappearQuestion={this.disappearQuestion}/>
                        </div>
                    </div>
                );
            }
            else {
                return <AnswerDescription answer={answers[selectedAnswer]} message={messages[selectedAnswer]} changeToNextQuestion={this.nextQuestion} counter={nr} total={total }/>
            }
        }
    }
}

export default Quiz;