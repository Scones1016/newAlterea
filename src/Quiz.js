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
import { Prompt } from "react-router-dom";
import quizPic1 from "./quizImages/quizPic1.jpg";
import quizPic2 from "./quizImages/quizPic2.jpg";
import quizPic3 from "./quizImages/quizPic3.jpg";
import quizPic4 from "./quizImages/quizPic4.jpg";
import quizPic5 from "./quizImages/quizPic5.jpg";
import quizPic6 from "./quizImages/quizPic6.jpg";
import quizPic7 from "./quizImages/quizPic7.jpg";
import quizPic8 from "./quizImages/quizPic8.jpg";
import quizPic9 from "./quizImages/quizPic9.jpg";
import quizPic10 from "./quizImages/quizPic10.jpg";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: 12,
            answerJsonFile: [],
            selectedAnswer: 5,
            isAnswered: false,
            finalQuestion: false,
            agency: '',
            agentName: '',
            calibratingMessage: 'CALIBRATING',
            isBackButtonClicked: false,
            email: this.props.location.state.email,
            image: "./quizImages/quizPic",
            quizAnswered: false
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.createAnswerJsonFile = this.createAnswerJsonFile.bind(this);
        this.disappearQuestion = this.disappearQuestion.bind(this);
        this.endQuiz = this.endQuiz.bind(this);
    }

    onBackButtonEvent = (e) => {
        e.preventDefault();
            if(this.state.finalQuestion) {
                console.log("In final question back button");
                this.props.history.push('/login');
            }
            else {
                if (!window.confirm("Are you sure you want to go back? We'll lose all your answers!")) {
                    this.isBackButtonClicked = true;
                } 
                else {
                    window.history.pushState(null, null, window.location.pathname);
                    this.props.history.push(
                        '/quizIntro',
                        { email: this.state.email}
                      );
                    this.isBackButtonClicked = false;
                }
            }
    }

    componentDidMount() {     
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate',this.onBackButtonEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.onBackButtonEvent);
    }

    componentDidUpdate() {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate',this.onBackButtonEvent);
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
        if( nr < total) {
            this.pushData(nr);
        }
        else {
            this.endQuiz();
        }
    }

    endQuiz() {
        this.setState({ finalQuestion: true});
        var userAnswers = {};
        userAnswers["email"] = this.props.location.state.email;
        userAnswers["answer"] = this.state.answerJsonFile;
        console.log(userAnswers);
        var url = "https://backend.defeatdis.info/quiz";
        console.log(url);
        const axios = require('axios');
        axios.get(url, {
            params : userAnswers
        })
        .then(
            response=> {
                var agency = response.data.agency;
                agency = agency.toUpperCase();
                var agencyArray = agency.split("").join('.');
                this.setState({
                    agency: agencyArray+".",
                    agentName: response.data.agentName
                })
            })
            .catch(e=>console.log(e))
        setTimeout(() => this.setState({calibratingMessage:''}), 7000);
    }

    disappearQuestion(answerIndex) {
        this.setState({ 
            isAnswered: true,
            selectedAnswer: answerIndex
        });
        this.setState({ answerJsonFile: this.state.answerJsonFile.concat(answerIndex) })
    }

    render() {
        console.log("In quiz");
        console.log(this.props.location.state.email);
        let { nr, total, question, answers, messages, isAnswered, selectedAnswer, finalQuestion } = this.state;
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
                <p className="quizQuestionNo">{nr}/{total}</p>
                        <p className="quizQuestion">{question}</p>
                        { this.state.nr === 1 && <img src={quizPic1} width="500" height="300" className="mx-auto mb-5"/>}
                        { this.state.nr === 2 && <img src={quizPic2} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 3 && <img src={quizPic3} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 4 && <img src={quizPic4} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 5 && <img src={quizPic5} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 6 && <img src={quizPic6} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 7 && <img src={quizPic7} width="500" height="300" className="mx-auto mb-5"/>}  
                        { this.state.nr === 8 && <img src={quizPic8} width="500" height="300" className="mx-auto mb-5"/>} 
                        { this.state.nr === 9 && <img src={quizPic8} width="500" height="300" className="mx-auto mb-5"/>} 
                        { this.state.nr === 10 && <img src={quizPic6} width="500" height="300" className="mx-auto mb-5"/>} 
                        { this.state.nr === 11 && <img src={quizPic9} width="500" height="300" className="mx-auto mb-5"/>} 
                        { this.state.nr === 12 && <img src={quizPic10} width="500" height="300" className="mx-auto mb-5"/>}         
                        <Answers answers={answers} messages={messages} isAnswered={this.questionAnswered} selectedAnswer={this.state.selectedAnswer} storeAnswer={this.createAnswerJsonFile} disappearQuestion={this.disappearQuestion}/>
                        </div>
                    </div>
                );
            }
            else {
                return <AnswerDescription answer={answers[selectedAnswer]} message={messages[selectedAnswer]} changeToNextQuestion={this.nextQuestion} counter={nr} total={total}/>
            }
        }
    }
}

export default Quiz;