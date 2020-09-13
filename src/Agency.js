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
            Congratulations, <span className="highlight">Agent {this.props.agentName}</span>! You foiled Dr. Disinfo’s plans in the simulation. Keep in mind, however, that this was just a simulation — we have no idea what a man as dastardly as Dr. Disinfo could be cooking up in real life.<br></br><br></br>
            
            Based on your decisions, we have assigned you to <span className="highlight">U.M.B.R.A.</span><br></br>
           You may come off as arrogant to others, but you can’t help it: you’re charming, witty, stylish, and generally loveable. Self-confidence shouldn’t be a crime. Add in your knack for getting out of sticky situations unharmed, and you have everything it takes to be a member of an agency as elite as U.M.B.R.A. We know you will excel here. You clearly belong amongst the best. 
              <br/>
              <br/>
              Good luck, Agent, and remember: <span className="highlight">Never trust anybody. Ever.</span>
            <br/>
            <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} quote={"I am a part of the U.M.B.R.A agency. Check out which agency quiz you belong to!"} hashtag={"#AgentsOfInfluence"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the U.M.B.R.A agency. Check out which agency quiz you belong to!"} hashtags={["AgentsOfInfluence,UmbraAgent"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the U.M.B.R.A agency. Check out which agency quiz you belong to!"} separator={":"}>
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
            Congratulations, <span className="highlight">Agent {this.props.agentName}</span>! You foiled Dr. Disinfo's plans in the simulation. You foiled Dr. Disinfo’s plans in the simulation. Keep in mind, however, that this was just a simulation — we have no idea what a man as dastardly as Dr. Disinfo could be cooking up in real life. <br></br><br></br>
            
            Based on your decisions, we have assigned you to <span className="highlight">O.R.A.C.L.E.</span><br></br>
            While you may require seven alarms to wake up, you can always be counted on to get the job done when it matters most. You’re laid back and super fun to be around, yet you always surprise people with your deep thinking and creative problem solving. We know that you’ll fit right in at O.R.A.C.L.E.
            <br/>
            Good luck, Agent, and remember: <span className="highlight">Never trust anybody. Ever.</span>
            <br/> <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <div className="col-md-1">
            <FacebookShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} quote={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} hashtag={"#AgentsOfInfluence"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-1">
            <TwitterShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} hashtags={["AgentsOfInfluence,OracleAgent"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-1">
            <WhatsappShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} separator={":"}>
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
