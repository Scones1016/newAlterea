import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AboutPartners from './AboutPartners';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ModalDemo from './ModalDemo';
import { IconButton } from '@material-ui/core';
import LoginModal from './LoginModal';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = { 
            isTermsModalOpen: false ,
            isUserModalOpen: false,
            isPrivacyModalOpen: false,
            modalTitles : [ 'Terms & Conditions', 'User Agreement', 'Privacy Policy'],
            modalTexts : [
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.'
            ],
            input: {},
            errors: {},
            forgotPassword: false,
            isQuizAnswered: false,
            agency: '',
            agentName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToSignUp = this.redirectToSignUp.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
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

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit() {
        if(this.validate()){
            var loginFlag = false;
            console.log(this.state.input);
            var url = "http://localhost:5000/login";
            var data = this.state.input; 
            const axios = require('axios');
            axios.get(url, {
                params : data
            })
            .then(
                response=> {
                    console.log(response);
                    if(response.data.msg === "error")
                    {
                        console.log("HELLO IN ERROR");
                        loginFlag = true;
                        if(loginFlag) {
                            var errors = {};
                            errors["password"] = "Please enter valid email address / password";
                            this.setState({ errors: errors});
                        }
                    }
                    else {
                        var user = {};
                        user["email"] = this.state.input["email"];
                        console.log(user);
                        var url = "http://localhost:5000/isQuizAnswered";
                        console.log(url);
                        const axios = require('axios');
                        axios.get(url, {
                            params : user
                        })
                        .then(
                            response=> {
                                console.log(response);
                                if(response.data.quizTaken === "Taken") {
                                    var agency = response.data.agencyName
                                    agency = agency.toUpperCase();
                                    var agencyArray = agency.split("").join('.');
                                    var email = this.state.input["email"];
                                    var input = {};
                                    this.setState({ input: input});
                                    /*this.props.history.push(
                                        '/agency',
                                        {   email: email,
                                            agency: this.state.agency,
                                            agentName: this.state.agentName
                                        }
                                    );*/
                                    console.log("check if quiz answered true");
                                }
                                else {
                                    this.props.history.push(
                                        'quizIntro',
                                        {
                                            email: email
                                        }
                                    )
                                }
                            })
                        .catch(e=>console.log(e))
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
        }

        this.setState({
            errors: errors
        })

        return isValid;
    
    }

    redirectToSignUp() {
        this.props.history.push('/');
    }

    forgotPassword() {

    }

    render() {
        return (
          <div className="containerClass">
            {this.state.forgotPassword && 
                <div className="content text-center container-fluid mt-5">
                    <br/>
                    <br/>
                    <h3 className="logInOption mt-5">We sent you an email link with your password.</h3>
                    <br/>
                    <h3 className="logInOption">Please Login <span>HERE</span> </h3>
                </div>
            }
            {!this.state.forgotPassword && 
            <div className="content text-center container-fluid">
                <div className="row marginTop logInTop">
                    <div className="col-md-6 text-right">
                        <p className="title titleSignIn">Welcome Back, <br></br>Recruit</p>
                    </div>
                    <div className="col-md-6 text-left">
                            <form className="col-md-12 d-flex flex-column">
                                <h1 className="signUpHeader">LOG IN</h1>
                                    <h3 className="logInOption">DON'T HAVE AN ACCOUNT? SIGN UP <u><span onClick={this.redirectToSignUp}>HERE</span></u>.</h3>
                                <input className="marginBetween text-center input" type="email" id="email" name="email" placeholder="EMAIL" value={this.state.input.email} onChange={this.handleChange}/>
                                <p className="errorStyle">{this.state.errors.email}</p>
                                <input className="marginBetween text-center input" type="password" placeholder="PASSWORD" name="password" value={this.state.input.password} onChange={this.handleChange}/>
                                <p className="errorStyle">{this.state.errors.password}</p>
                                <p className="logInOption underLine" onClick={this.forgotPassword}>Forgot Password?</p>
                            </form>
                    </div>
                </div>


               

                <button className="signUpButton formButton signInButton" onClick={this.handleSubmit}>LOG IN</button>

                <a className="marginTop copyRight" href="altereainc.com">&#169;Alterea Inc, 2020</a>
            </div>}
          </div> 
        );
    }
}

export default LoginForm;