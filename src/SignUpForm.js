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

class SignUpForm extends Component {
    constructor() {
        super(...arguments);
        this.state = { 
            input: {},
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    openTerms = () => {
        this.setState({ isTermsModalOpen : true });
    }

    openUser = () => {
        this.setState({ isUserModalOpen : true });
    }

    openPrivacy = () => {
        this.setState({ isPrivacyModalOpen : true });
    }

    hideTerms = () => {
        this.setState({ isTermsModalOpen : false });
    }

    hideUser = () => {
        this.setState({ isUserModalOpen : false });
    }

    hidePrivacy = () => {
        this.setState({ isPrivacyModalOpen : false });
    }

    changeTermsState = () => {
        this.setState({ modalTermsCheckBox : !this.state.modalTermsCheckBox });
    }

    changeUsersState = () => {
        this.setState({ modalUserCheckBox : !this.state.modalUserCheckBox });
    }

    changePrivacyState = () => {
        this.setState({ modalPrivacyCheckBox : !this.state.modalPrivacyCheckBox });
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit() {
        if(this.validate()) {
            var data = this.state.input;
            var url = "https://backend.defeatdis.info/signup";
            var data = this.state.input; 
            const axios = require('axios');
            axios.get(url, {
                params : data
            })
            .then( response => {
                if(response.data.msg === "error") {
                    var errors = {};
                    errors.confirmPassword = "Email Already In Use";
                    this.setState({ errors: errors});
                }
                else {
                    this.props.history.push(
                        'terms',
                        {
                            email: this.state.input["email"]
                        }
                    )
                }
            })
            .catch(e=>console.log(e))
        }
    }

    validate() {
        let input = this.state.input;
        console.log(input);
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if(typeof input["password"] == "undefined") {
            isValid = false;
            errors["password"] = "Please enter a password";
        }
        else {
            if (input["password"].length < 8) {
                isValid = false;
                errors["password"] = "Password must be atleast 8 characters long";
            }
            else if(input["password"] != input["confirmPassword"]) {
                isValid = false;
                errors["confirmPassword"] = "The passwords don't match.";
            }
        }

        this.setState({
            errors: errors
        })

        return isValid;
    
    }

    redirectToLogin() {
        this.props.history.push('/login');
    }

    componentDidMount() {
        if(window.innerWidth < 1200) {
            var signupButton = document.getElementById("signupButton");
            signupButton.classList.remove("col-md-2");
            signupButton.style.removeProperty("width");
        }
    }

    render() {
        return (
            <div className="wrapper" onClick={this.closeAllModals}>
          <div className="containerClass">
                <div className="remove content text-center container-fluid">
                    <div className="row marginTop topRow">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 signUpForm text-center">

                                <form className="col-md-12 d-flex flex-column formDiv">
                                    <h1 className="signUpHeader">CREATE AN ACCOUNT</h1>
                                    <h3 className="logInOption">ALREADY HAVE AN ACCOUNT? <u><span onClick={this.redirectToLogin}>LOG IN.</span></u></h3>
                                    <input className="marginBetween text-center input" type="text" id="username" name="username" placeholder="FULL NAME" value={this.state.input.username} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.username}</p>
                                    <input className="marginBetween text-center input" type="email" id="email" name="email" placeholder="EMAIL" value={this.state.input.email} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.email}</p>
                                    <input className="marginBetween text-center input" type="password" placeholder="PASSWORD" name="password" value={this.state.input.password} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.password}</p>
                                    <input className="marginBetween text-center input" type="password" placeholder="CONFIRM PASSWORD" name="confirmPassword" value={this.state.input.confirmPassword} onChange={this.handleChange} />
                                    <div className="errorStyle">{this.state.errors.confirmPassword}</div>
                                </form>
                        </div>
                        <div className="col-md-4"></div>
                        </div>
                    <br/>
                    <br/>
                    <div className="col-md-12 text-center duplicateEmailError">{this.state.errors.duplicateEmail}</div>

                   <div className="buttons container-fluid">
                        
                        <button className="signUpButton formButton col-md-2 signUpButtonWidth" id="signupButton" onClick={this.handleSubmit}>Sign Up</button>
                        <a className="marginAboutUs copyRight" target="_blank" href="https://www.altereainc.com"><button className="signUpButton formButton col-md-2 signUpButtonWidth" id="signupButton" onClick={this.handleAbout}>About Us</button></a>
                        <p className="agreementErrorStyle col-md-4 text-center">{this.state.errors.checkbox}</p>
                        <a className="marginTop copyRight" target="_blank" href="https://www.altereainc.com">&#169;Alterea Inc, 2020</a>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
