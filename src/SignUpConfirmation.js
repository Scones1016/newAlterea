import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "react-router-dom";

class SignUpConfirmation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("SIGN UP CONFIRMATION");
        return (
            <div className="containerClass">
                <div className="content text-center container-fluid marginTopConfirmation">
                    <p className="confirmation">Thank you for signing up with us!</p>
                    <p  className="confirmation" onClick={() => this.props.history.push('/login')}>Login here!</p>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUpConfirmation);