import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router-dom";
class AgentsWanted extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.history.push("quizIntro", {
      email: this.props.location.state.email,
    });
  }

  render() {
    return (
      <div className="wrapper" onClick={this.closeAllModals}>
        <div className="containerClass">
          <div className="remove content text-center container-fluid">
            <div className="row marginTop topRow"></div>
            <div className="titles ">
              <p className="title">Agents Wanted!</p>
              <p className="mx-auto">
                U.M.B.R.A. and O.R.A.C.L.E., two rival spy agencies led by
                siblings Artemis and Apollo, are temporarily joining forces to
                defeat the mad doctor. today to join an Agency! <br></br>
                <br></br>
                Starting on October 4th, you will complete daily short digital
                missions, each following the trail of Dr. Disinfo. You will
                traverse social media platforms and websites, play mini games
                with live actors, and score points for completing missions. The
                strongest recruits from each day will represent their Agency in
                the final confrontation on October 10th with Dr. Disinfo.
              </p>
              <button
                className="signUpButton formButton signInButton signUpButtonWidth"
                onClick={this.handleSubmit}
              >
                CONTINUE
              </button>
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
