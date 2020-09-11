import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AboutPartners from './AboutPartners';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ModalDemo from './ModalDemo';
import { IconButton } from '@material-ui/core';
import SignUpConfirmation from './SignUpConfirmation';
import LoginForm from './LoginForm';
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = { 
            isTermsModalOpen: false ,
            isUserModalOpen: false,
            isPrivacyModalOpen: false,
            modalTitles : [ 'Terms & Conditions', 'Game Rules', 'Privacy Policy'],
            modalTexts : [
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.',
                'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it\'s not genuine, correct, or comprehensible Latin anymore. While lorem ipsum\'s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero\'s text doesn\'t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.'
            ],
            modalErrors : [
                'Please agree to the terms and conditions.',
                'Please aceept the game rules.',
                'Please accept the privacy policy.'
            ],
            modalStatements : [
                'I accept the terms and conditions',
                'I accept the game rules.',
                'I have read through the privacy policy'
            ],
            input: {},
            errors: {},
            modalTermsCheckBox: false,
            modalUserCheckBox: false,
            modalPrivacyCheckBox: false
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
        var signUpFlag = false;
        if(this.validate()){
            console.log(this.state.input);
            var url = "https://backend-env.eba-zkuyd2ed.us-east-1.elasticbeanstalk.com/signup";
            var data = this.state.input; 
            console.log(data);
            /*const axios = require('axios');
            axios.get(url, {
                params : data
            })
            .then(
                response=> {
                    console.log(response.data.msg);
                    if(response.data.msg === "error")
                    {
                        console.log("HELLO IN ERROR");
                        signUpFlag = true;
                        if(signUpFlag) {
                            var errors = {};
                            errors["confirmPassword"] = "Email Already In Use";
                            this.setState({ errors: errors});
                        }
                    }
                    else {
                        var input = {};
                        this.setState({ input: input});
                        this.props.history.push('/signUpConfirmation');
                    }
            })
            .catch(e=>console.log(e))*/
            var data = this.state.input;
            fetch("http://backend-env.eba-zkuyd2ed.us-east-1.elasticbeanstalk.com/signup?username=${encodeURIComponent(data.username)}&email=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}", {
                method: "GET"
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
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

        if(this.state.modalTermsCheckBox !== true || this.state.modalUserCheckBox !== true || this.state.modalPrivacyCheckBox !== true) {
            isValid = false;
            errors["checkbox"] = "Please look through each of the above three agreements.";
        }


        this.setState({
            errors: errors
        })

        return isValid;
    
    }

    redirectToLogin() {
        this.props.history.push('/login');
    }

    render() {
        console.log("ERRORS");
        console.log(this.state.errors.confirmPassword);
        return (
          <div className="containerClass">
                <div className="content text-center container-fluid">
                    <a href="https://www.altereainc.com/about" className="noStyle newFont"><p className="marginTop">About Us</p></a>
                    <div className="row marginTop">
                        <div className="col-md-6 text-right">
                            <p className="title">Welcome,</p>
                            <p className="title">Agent</p>
                        </div>
                        <div className="col-md-6 text-left">
                                <form className="col-md-12 d-flex flex-column">
                                    <input className="marginBetween text-center" type="text" id="username" name="username" placeholder="enter your name" value={this.state.input.username} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.username}</p>
                                    <input className="marginBetween text-center" type="email" id="email" name="email" placeholder="enter your email-ID" value={this.state.input.email} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.email}</p>
                                    <input className="marginBetween text-center" type="password" placeholder="create your password" name="password" value={this.state.input.password} onChange={this.handleChange}/>
                                    <p className="errorStyle">{this.state.errors.password}</p>
                                    <input className="marginBetween text-center" type="password" placeholder="confirm password" name="confirmPassword" value={this.state.input.confirmPassword} onChange={this.handleChange} />
                                    <div className="errorStyle">{this.state.errors.confirmPassword}</div>
                                </form>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="col-md-12 text-center duplicateEmailError">{this.state.errors.duplicateEmail}</div>
                    <div className="text-center container-fluid">
                        <div className="row mt-5">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 row">
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <div>
                                        <p className="newFont" onClick={this.openTerms}>Terms & Conditions</p>
                                        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" checked={this.state.modalTermsCheckBox}></input>
                                        <label for="styled-checkbox-1"></label>
                                        <ModalDemo modalOption={0} checkBoxState={this.state.modalTermsCheckBox} isOpen={this.state.isTermsModalOpen} mTitle={this.state.modalTitles[0]} mText={this.state.modalTexts[0]} hideDialog={this.hideTerms} mError={this.state.modalErrors[0]} changeState={this.changeTermsState} mStatement={this.state.modalStatements[0]}/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <ArrowRightAltIcon/>
                                </div>
                                <div className="col-md-2">
                                    <div>
                                        <p className="newFont" onClick={this.openUser}>Game Rules</p>
                                        <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" checked={this.state.modalUserCheckBox}></input>
                                        <label for="styled-checkbox-2"></label>
                                        <ModalDemo modalOption={1} checkBoxState={this.state.modalUserCheckBox} isOpen={this.state.isUserModalOpen} mTitle={this.state.modalTitles[1]} mText={this.state.modalTexts[1]} hideDialog={this.hideUser} mError={this.state.modalErrors[1]} changeState={this.changeUsersState} mStatement={this.state.modalStatements[1]}/>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <ArrowRightAltIcon/>
                                </div>
                                <div className="col-md-2">
                                    <div>
                                        <p className="newFont" onClick={this.openPrivacy}>Privacy Policy</p>
                                        <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" checked={this.state.modalPrivacyCheckBox}></input>
                                        <label for="styled-checkbox-3"></label>
                                        <ModalDemo modalOption={2} checkBoxState={this.state.modalPrivacyCheckBox} isOpen={this.state.isPrivacyModalOpen} mTitle={this.state.modalTitles[2]} mText={this.state.modalTexts[2]} hideDialog={this.hidePrivacy} mError={this.state.modalErrors[2]} changeState={this.changePrivacyState} mStatement={this.state.modalStatements[2]}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                    <button className="signUpButton formButton" onClick={this.handleSubmit}>Sign Up</button>
                    <div className="agreementErrorStyle col-md-12 text-center mt-2">{this.state.errors.checkbox}</div>
                    <p className="loginLink">Already Have An Account? <span onClick={this.redirectToLogin}> Login Here!</span></p>
                    <p className="marginTop copyRight">&#169;Alterea Inc, 2020</p>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpForm);