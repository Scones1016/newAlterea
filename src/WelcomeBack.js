import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './Agency.css';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, InstapaperShareButton, InstapaperIcon, TwitterIcon, WhatsappIcon } from "react-share";

class WelcomeBack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="agencyContainer">
        {this.props.location.state.agency === 'U.M.B.R.A.' && 
        <div>
        <div className="umbraCard">
          <h1 className="umbraHeading">{this.props.location.state.agency}</h1>
          <h3 class="umbraSubHead">Unparalleled Members Beat Ruthless Arch-villains</h3>
          <p className="umbraText">
          Assigned Recruit name: {this.props.location.state.agentName}<br></br>
          Assigned agency: U.M.B.R.A.
          </p>
          <p className="umbraText">
            Welcome back, <span className="highlight">Agent {this.props.location.state.agentName}!</span><br></br><br></br>
            
           We hope you are enjoying your time on our social media training grounds and have been preparing well to face Dr. Disinfo very soon. We look forward to seeing you here on... 


             <span class="date">October 11th at 9am PST</span>

              <br/>
              Warmest Regards, 
              <br/>
              <br/>
              Nighthawk
              <br/>
              U.M.B.R.A. Tech Specialist and Handler
        </p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"www.agentsagainstdisinfo.com"} quote={"Armed with charm in one hand and a knife in the other, U.M.B.R.A. agents seduce or stab any obstacle in their path. Their intensity might seem a tiny bit daunting to some, but to others it’s absolutely terrifying. Be with the best. Join U.M.B.R.A."} hashtag={"#teamumbra"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"www.agentsagainstdisinfo.com"} title={"Armed with charm in one hand and a knife in the other, U.M.B.R.A. agents seduce or stab any obstacle in their path. Their intensity might seem a tiny bit daunting to some, but to others it’s absolutely terrifying. Be with the best. Join U.M.B.R.A."} hashtags={["AgentsAgainstDisinfo", "teamumbra"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"www.agentsagainstdisinfo.com"} title={"Armed with charm in one hand and a knife in the other, U.M.B.R.A. agents seduce or stab any obstacle in their path. Their intensity might seem a tiny bit daunting to some, but to others it’s absolutely terrifying. Be with the best. Join U.M.B.R.A."} separator={":"}>
              <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            </div>
          </div>
        </div>
        </div>
        }
        {this.props.location.state.agency !== 'U.M.B.R.A.' && 
        <div>

        <div className="oracleCard">
          <h1 className="oracleHeading">{this.props.location.state.agency}</h1>
          <h3 class="oracleSubHead">Our Righteous Agents Cancel Lame Evil
          </h3>
          <p className="oracleText">
            Assigned Recruit Name: {this.props.location.state.agentName}<br></br>
            Assigned Agency: O.R.A.C.L.E.
          </p>

          <p className="oracleText">
            Glad to see you back, <span className="highlight">Agent {this.props.location.state.agentName}!</span><br></br><br></br>
            
          Hope you’re having a good time out on the social media training grounds and have been preparing well to face Dr. Disinfo very soon. Looking forward to seeing you here on... 

            <br/><br/>

            <span class="date">October 11th at 9am PST</span>


              <br/>
              See you soon!
              <br/>
              <br/>
              Clotho
              <br/>
              O.R.A.C.L.E. Tech Operative and Your Handler
            </p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"www.agentsagainstdisinfo.com"} quote={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s butt."} hashtag={"#teamoracle"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"www.agentsagainstdisinfo.com"} title={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s butt."} hashtags={["AgentsAgainstDisinfo, teamoracle"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"www.agentsagainstdisinfo.com"} title={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s butt."} separator={":"}>
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

export default WelcomeBack;
