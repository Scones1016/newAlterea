import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './Agency.css';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, InstapaperShareButton, InstapaperIcon, TwitterIcon, WhatsappIcon } from "react-share";

class Agency extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, null,  window.location.href);
    });
}

  render() {
    return (
      <div className="agencyContainer">
        {this.props.agency === 'U.M.B.R.A.' && 
        <div>
        <div className="umbraCard">
          <h1 className="umbraHeading">{this.props.agency}</h1>
          <h3 class="umbraSubHead">Unparalleled Members Beat Ruthless Arch-villains</h3>
          <p className="umbraText">
          Assigned Recruit name: {this.props.agentName}<br></br>
          Assigned agency: U.M.B.R.A.
          </p>
          <p className="umbraText">
            Congratulations, <span className="highlight">Agent {this.props.agentName}!</span><br></br><br></br>
            
           Based on your decisions, we have assigned you to <span className="highlight">U.M.B.R.A.</span><br></br>
            You may come off as arrogant to others, but you can’t help it: you’re charming, witty, stylish, and generally loveable. Self-confidence shouldn’t be a crime. You have everything it takes to be a member of an agency as elite as U.M.B.R.A. You clearly belong amongst the best.


              <br/>
              <br/>
              You will be receiving an email shortly from our director with further instructions. 
              <br/>
              <br/>
              Good luck Agent, and remember: <span className="highlight">Trust no one. </span></p>
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
        {this.props.agency !== 'U.M.B.R.A.' && 
        <div>

        <div className="oracleCard">
          <h1 className="oracleHeading">{this.props.agency}</h1>
          <h3 class="oracleSubHead">Our Righteous Agents Cancel Lame Evil
          </h3>
          <p className="oracleText">
            Assigned Recruit Name: {this.props.agentName}<br></br>
            Assigned Agency: O.R.A.C.L.E.
          </p>

          <p className="oracleText">
            Congratulations, <span className="highlight">Agent {this.props.agentName}!</span><br></br><br></br>
            
           Based on your decisions, we have assigned you to <span className="highlight">O.R.A.C.L.E.</span> While you may require seven alarms to wake up, you can always be counted on to get the job done when it matters most. You’re laid back and super fun to be around, yet you always surprise people with your deep thinking and creative problem solving. We know that you’ll fit right in at O.R.A.C.L.E.
            <br/><br/>
            You will be receiving an email shortly from our director with further instructions.
            <br/>
            <br/>
            Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
            </p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"www.agentsagainstdisinfo.com"} quote={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s butt."} hashtag={"#teamoracle"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"www.agentsagainstdisinfo.com"} title={"If you’ve recently experienced uncontrollably chill vibes, recurring bouts of procrastination, sudden fits of 3AM inspiration, or the inexplicable urge to adopt a llama, know you are not alone. O.R.A.C.L.E. has your back. Together, we can be awesome and kick Dr. Disinfo’s butt."} hashtags={["AgentsAgainstDisinfo", "teamumbra"]}>
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

export default Agency;
