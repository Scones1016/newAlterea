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
            Congratulations, Agent {this.props.agentName}!<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">U.M.B.R.A. Agency.</span><br></br>
            You have high standards, a great eye for detail and enjoy the finer things in life. That's what it takes to be a member of an agency as elite as U.M.B.R.A.! We know you will excel here and will quickly become one of the brightest and the best.
              <br/>
              <br/>
              Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
            <br/>
            <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex text-center">
            <div className="col-md-4">
            <FacebookShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} quote={"I am a part of the U.M.B.R.A agency. Check out which agency quiz you belong to!"} hashtag={"#AgentsOfInfluence"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-4">
            <TwitterShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the U.M.B.R.A agency. Check out which agency quiz you belong to!"} hashtags={["AgentsOfInfluence,UmbraAgent"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-4">
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
            Congratulations, Agent {this.props.agentName}! You foiled Dr. Disinfo's plans in the simulation.<br></br><br></br>
            
            Based on the results of your personality analysis we have assigned you to the <span className="highlight">O.R.A.C.L.E Agency.</span><br></br>
            You are the pinnacle of adaptable, a confident agent, and an electric personality. That's what it takes to be a member of an agency as forward thinking as O.R.A.C.L.E.! 
            We know you will excel here and will quickly become one of our leading visionaries.
            <br/>
            Good luck Agent, and remember: <span className="highlight">Always trust nobody. Ever.</span>
            <br/>
        Let people know the results of your quiz!</p>
        <br/>
          <div className="col-md-12 d-flex text-center">
            <div className="col-md-4">
            <FacebookShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} quote={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} hashtag={"#AgentsOfInfluence"}>
              <FacebookIcon size={32} round={true}/>
            </FacebookShareButton>
            </div>
            <div className="col-md-4">
            <TwitterShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} hashtags={["AgentsOfInfluence,OracleAgent"]}>
              <TwitterIcon size={32} round={true}/>
            </TwitterShareButton>
            </div>
            <div className="col-md-4">
            <WhatsappShareButton url={"https://master.d255jcfwldhlpr.amplifyapp.com/"} title={"I am a part of the O.R.A.C.L.E agency. Check out which agency quiz you belong to!"} separator={":"}>
              <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>
            </div>
          </div>
        </div>
        </div>
        }
         <div className="agencyFooter mt-2">
          <p className="copyRight">&#169;Alterea Inc, 2020</p>
        </div>
      </div>
    );
  }
}

export default Agency;
