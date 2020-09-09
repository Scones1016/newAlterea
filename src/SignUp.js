import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AboutPartners from './AboutPartners';

class SignUp extends Component {
    render() {
        return (
          <div className="containerClass">
            <div className="content text-center container-fluid">
                <AboutPartners/>
                <p className="marginTop title">Agents Of Influence</p>
                <p className="marginTop timer">100:10:10</p>
                <button className="signUpButton">Sign Up</button>
                <p className="marginTop">T&C</p>
                <p className="marginTop copyRight">&#169;Alterea Inc, 2020</p>
            </div>
          </div>
        );
    }
}

export default SignUp;