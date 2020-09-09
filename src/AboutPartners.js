import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AboutPartners extends Component {
    render() {
        return (
                <div className="row marginTop text-center">
                    <div className="col-md-3"></div>
                    <a className="noStyle col-md-3 newFont" href="https://www.altereainc.com/about"><p onClick={this.redirectToAboutPage}>About Us</p></a>
                    <p className="col-md-3 newFont">Our Partners</p>
                </div>
        );
    }
}

export default AboutPartners;