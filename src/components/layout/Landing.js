import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { user } = this.props.auth;
    var name = "You are not logged in";
    if (user.name != null) {
      name = user.name;
    }
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper d-flex justify-content-center ">
        <div className="row">
          <div className="col s12 center-align">
            <h4 >
              <i className="material-icons">sports_soccer</i>
             <b> TPIBS</b> Turkish Players Incentive Bonus System
            </h4>
            <h4 >
              Hello! {name} 
            </h4>
            <p className="flow-text grey-text text-darken-1">
              See the stats of Turkish players in the Super Lig and compare them
            </p>
            <br />
            <div className="col s6 d-flex justify-content-center">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 d-flex justify-content-center align-items-center"
              >
                Register
              </Link>
            </div>
            <div className="col s6 d-flex justify-content-center">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect blue accent-3 white-text d-flex justify-content-center align-items-center"
              >
                Log In
              </Link>
            </div>
            <div className="col s6 d-flex justify-content-center" style={{ margin: "40px 0 0 0" }}>
              <Link
                to="/teams"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 d-flex justify-content-center align-items-center"
              >
                Teams List
              </Link>
            </div>

            <div className="col s6 d-flex justify-content-center" style={{ margin: "40px 0 0 0" }}>
              <Link
                to="/players"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 d-flex justify-content-center align-items-center"
              >
                Players
              </Link>
            </div>    

          </div>
        </div>       
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Landing);