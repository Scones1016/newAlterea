import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './Agency.css';

class Agency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="agencyContainer">
        {this.props.agency === 'U.M.B.R.A' && 
        <div>
        <div className="umbraCard">
          <h1 className="umbraHeading">{this.props.agency}</h1>
          <p className="umbraText">
            Congratulations, Agent {this.props.agentName}!<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">U.M.B.R.A. Agency.</span><br></br>
            You have high standards, a great eye for detail and enjoy the finer things in life. That's what it takes to be a member of an agency as elite as U.M.B.R.A.! We know you will excel here and will quickly become one of the brightest and the best.<br></br><br></br>
            Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
          </p>
        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
        </div>
        }
        {this.props.agency !== 'U.M.B.R.A' && 
        <div>
        <div className="oracleCard">
          <h1 className="oracleHeading">{this.props.agency}</h1>
          <p className="oracleText">
            Congratulations, Agent {this.props.agentName}!<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">U.M.B.R.A. Agency.</span><br></br>
            You have high standards, a great eye for detail and enjoy the finer things in life. That's what it takes to be a member of an agency as elite as U.M.B.R.A.! We know you will excel here and will quickly become one of the brightest and the best.<br></br><br></br>
            Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
          </p>
        </div>
        <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
        </div>
        }
      </div>
    );
  }
}

export default Agency;
