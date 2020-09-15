import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './SignUp';
import SignUpForm from './SignUpForm';
import SignUpConfirmation from './SignUpConfirmation';
import LoginForm from './LoginForm';
import Quiz from './Quiz';
import BeforeYouBegin from './BeforeYouBegin';
import QuizIntro from './QuizIntro';
import Answers from './Answers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomeRecruit from './WelcomeRecruit';
import QuizDavid from './Quiz_David';
import Agency from './Agency';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route exact path="/signUpConfirmation" component={SignUpConfirmation} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={SignUpForm}/>
          <Route exact path="/quiz" component={Quiz}/>
          <Route exact path="/quizDavid" component={QuizDavid}/>
          <Route exact path="/welcome" component={WelcomeRecruit}/>
          <Route exact path="/before_you_begin" component={BeforeYouBegin}/>
          <Route exact path="/quizIntro" component={QuizIntro}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
