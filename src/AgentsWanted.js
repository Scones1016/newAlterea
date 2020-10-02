import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from 'react-router-dom';
import './App.css';

class AgentsWanted extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
      this.props.history.push(
        '/',
    )
  }

  render() {
    return (
      <div className="wrapper" onClick={this.closeAllModals}>
        <div className="containerClass">
          <div className="remove content text-center container-fluid">
            <div className="row marginTop topRow"></div>
            <div className="titles ">
              <p className="title">Agents Wanted!</p>
              <p className="mx-auto agentsText col-md-8">
                U.M.B.R.A. and O.R.A.C.L.E., two rival spy agencies led by
                siblings Artemis and Apollo, are temporarily joining forces to
                defeat the mad doctor.Sign up today to join an Agency! <br></br>
                <br></br>
                Starting on October 11th, you will complete daily short digital
                missions, each following the trail of Dr. Disinfo. You will
                traverse social media platforms and websites, play mini games
                with live actors, and score points for completing missions. As a recruit, you will be equipped with knowledge and tools
                that will help discern fact from fiction in real life. The
                strongest recruits from each day will represent their Agency in
                the final confrontation on October 1t7h with Dr. Disinfo.
              </p>
              <a className="marginAboutUs copyRight" target="_blank" href="https://www.altereainc.com"><button className="signUpButton formButton aboutCreators" id="signupButton" onClick={this.handleAbout}>About The Creators</button></a>

              <button className="signUpButton formButton signInButton signUpButtonWidth" onClick={this.handleSubmit}>BACK</button>

              <a
                className=" copyRight mt-5"
                target="_blank"
                href="https://www.altereainc.com"
              >
                &#169;Alterea Inc, 2020
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AgentsWanted);
