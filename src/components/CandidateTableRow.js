import React, { Component } from "react";
import axios from "axios";

export default class CandidateTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.obj.candidate.votes,
    };
  }

  handleVote = () => {
    console.log(this.props)
    axios
      .post(`http://localhost:5000/api/candidates/vote/${this.props.obj._id}`)
      .then((response) => {
        this.setState({ votes: response.data.votes });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
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
                    <h4>{this.props.obj.candidate.name}</h4>
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
                          className="btn btn-primary"
                        >
                          Vote
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
