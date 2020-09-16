import React from 'react';
import QuestionData from './QuestionData';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class CalibratingCard extends Component {
    render() {
        return (
            <div className="card calibratingCard">
                        <p className="calibratingText saving">{this.props.calibratingMessage}<span>.</span><span>.</span><span>.</span></p>
            </div>
        );
    }
}

export default CalibratingCard;