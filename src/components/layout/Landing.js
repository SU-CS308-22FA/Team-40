import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <i className="material-icons">sports_soccer</i>
             <b> TPIBS</b> Turkish Players Incentive Bonus System
            </h4>
            <p className="flow-text grey-text text-darken-1">
              See the stats of Turkish players in the Super Lig and compare them
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect blue accent-3 white-text"
              >
                Log In
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/teams"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Teams List
              </Link>
            </div>
          </div>
        </div>       
      </div>
    );
  }
}

export default Landing;
