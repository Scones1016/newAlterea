import React from 'react';
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount() {
    document.title = 'Agents Of Influence';
  }

  render() {
    return (
      <div className="containerClass">
        <div className="content text-center container-fluid">
          <p className="marginTop">About Us</p>
          <p className="marginTop">Our Partners</p>
          <p className="marginTop title">Agents Of Influence</p>
          <p className="marginTop timer">100:10:10</p>
          <p className="marginTop">T&C</p>
          <p className="marginTop copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default App;