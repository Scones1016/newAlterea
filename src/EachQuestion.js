import React from 'react';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class EachQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Hello from each question");
        console.log(this.props);
        return (
            <div>

            </div>
        )
    }
}

export default EachQuestion;