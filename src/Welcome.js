import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AboutPartners from "./AboutPartners";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ModalDemo from "./ModalDemo";
import { IconButton } from "@material-ui/core";
import SignUpConfirmation from "./SignUpConfirmation";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";
import MetaTags from "react-meta-tags";
import "./Changes.css";

class Welcome extends Component {
  constructor() {
    super(...arguments);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirectToSignUp() {
    this.props.history.push("/signup");
  }

  redirectToLogin() {
    this.props.history.push("/login");
  }

  handleSubmit() {
    if (this.validate()) {
      var data = this.state.input;
      var url = "https://backend.defeatdis.info/signup";
      var data = this.state.input;
      const axios = require("axios");
      axios
        .get(url, {
          params: data,
        })
        .then((response) => {
          if (response.data.msg === "error") {
            var errors = {};
            errors.confirmPassword = "Email Already In Use";
            this.setState({ errors: errors });
          } else {
            this.props.history.push("terms", {
              email: this.state.input["email"],
            });
          }
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    return (
      <div className="wrapper" onClick={this.closeAllModals}>
        <div className="containerClass">
          <div className="remove content text-center container-fluid">
            <div className="row marginTop topRow">
              <div className="text-center titles">
                <p className="title">AGENTS OF INFLUENCE</p>
                <p style={{ fontSize: 50 }}>Welcome Recruit</p>

                <p>
                  The evil Dr. Disinfo is planning to poison Hawaiian pizza
                  around the country. If ingested, it turns people into
                  robo-zombie-werewolf-vampire-mummies. The only thing standing
                  in his way is you: our new agency recruits. This is your
                  chance to save the world.
                </p>
              </div>
              <div className="btn btn-block btn-lg">
                <button className="col-xs-4">About this event</button>
                <button
                  //className="signUpButton formButton col-md-2 signUpButtonWidth"
                  id="signupButton"
                  onClick={this.redirectToSignUp}
                >
                  Sign Up
                </button>

                <p className="accountSignUp">
                  ALREADY HAVE AN ACCOUNT?{" "}
                  <u>
                    <span onClick={this.redirectToLogin}>LOG IN.</span>
                  </u>
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="text-center container-fluid">
              <p className="title">Your Mission starts Oct 11</p>
              <div className="col-md-6 row" id="checkboxSixColumn"></div>
            </div>

            <div className="buttons container-fluid">
              <a
                className="marginTop copyRight"
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

export default withRouter(Welcome);
