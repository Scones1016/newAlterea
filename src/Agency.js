import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './Agency.css';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, InstapaperShareButton, InstapaperIcon, TwitterIcon, WhatsappIcon } from "react-share";

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
            Congratulations, <span className="highlight">Agent {this.props.agentName}</span>!<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">U.M.B.R.A. Agency.</span><br></br>
            You have high standards, a great eye for detail and enjoy the finer things in life. That's what it takes to be a member of an agency as elite as U.M.B.R.A.! We know you will excel here and will quickly become one of the brightest and the best.
              <br/>
              <br/>
              Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
            <br/>
            <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"www.agentsagainstdisinfo.com"} quote={"U.M.B.R.A. agents are ambitious, capable, and sinfully charming. Dr. Disinfo doesn’t stand a chance. Be with the best. Join U.M.B.R.A."} hashtag={"#AgentsAgainstDisinfo"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"www.agentsagainstdisinfo.com"} title={"U.M.B.R.A. agents are ambitious, capable, and sinfully charming. Dr. Disinfo doesn’t stand a chance. Be with the best. Join U.M.B.R.A."} hashtags={["AgentsAgainstDisinfo", "TeamUmbra"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"www.agentsagainstdisinfo.com"} title={"U.M.B.R.A. agents are ambitious, capable, and sinfully charming. Dr. Disinfo doesn’t stand a chance. Be with the best. Join U.M.B.R.A."} separator={":"}>
              <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            </div>
          </div>
        </div>
        </div>
        }
        {this.props.agency !== 'U.M.B.R.A' && 
        <div>

        <div className="oracleCard">
          <h1 className="oracleHeading">{this.props.agency}</h1>
          <p className="oracleText">
            Congratulations, <span className="highlight">Agent {this.props.agentName}</span>! You foiled Dr. Disinfo's plans in the simulation.<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">O.R.A.C.L.E Agency.</span><br></br>
            You are the pinnacle of adaptable, a confident agent, and an electric personality. That's what it takes to be a member of an agency as forward thinking as O.R.A.C.L.E.! 
            We know you will excel here and will quickly become one of our leading visionaries.
            <br/>
            Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
            <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"www.agentsagainstdisinfo.com"} quote={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s ass."} hashtag={"#AgentsAgainstDisinfo"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"www.agentsagainstdisinfo.com"} title={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s ass."} hashtags={["AgentsAgainstDisinfo,TeamOracle"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"www.agentsagainstdisinfo.com"} title={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back.Together, we can be awesome and kick Dr. Disinfo’s ass."} separator={":"}>
              <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            </div>
          </div>
        </div>
        </div>
        }
         <div className="footer">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default Agency;
