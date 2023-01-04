import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default class CandidateTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.obj.candidate.votes,
      voted: false,
      message: ""
    };
  }

  componentDidMount() {
    // check if the user has already voted by checking for the existence of a cookie
    const voted = Cookies.get("voted");
    if (voted) {
      this.setState({ voted: true, message: "VOTED" });
    }
  }

  handleVote = () => {
    console.log(this.props)
    axios
      .post(`https://backend308.onrender.com/api/candidates/vote/${this.props.obj._id}`)
      .then((response) => {
        this.setState({ votes: response.data.votes, voted: true, message: "VOTED" });
        // set a cookie to indicate that the user has already voted
        Cookies.set("voted", true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    var playerLink = "https://cs308team40.netlify.app/players/" + this.props.obj.candidate.id;
    return (
      <tr>
        <td>
          <center>
            <img src={this.props.obj.candidate.avatar} alt={this.props.obj.candidate.avatar} />
          </center>
        </td>
        <td>
          <center>
            <table>
              <tr>
                <td>
                  <center>{this.props.obj.candidate.club}</center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <h4><a href= {playerLink}> {this.props.obj.candidate.name}</a></h4>
                  </center>
                </td>
              </tr>
              <tr>
                <table>
                  <tr>
                    <td>
                      <center>
                        <button
                          onClick={this.handleVote}
                          className={this.state.voted ? "btn btn-secondary" : "btn btn-primary"}
                          disabled={this.state.voted}
                        >
                          {this.state.message || "Vote"}
                        </button>
                      </center>
                    </td>
                    <td><center>{this.props.obj.candidate.votes}</center> </td>
                  </tr>
                </table>
              </tr>
            </table>
          </center>
        </td>
        <td>
          <center>
            <img src={this.props.obj.candidate.club_logo} alt={this.props.obj.candidate.club_logo} />
          </center>
        </td>
      </tr>
    );
  }
}

