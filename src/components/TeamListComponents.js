import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TeamTableRow from './TeamTableRow';

export default class TeamList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    axios.get('https://backend308.onrender.com/api/teams/getteams')
      .then(res => {
        this.setState({
          teams: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.teams.map((res, i) => {
      return <TeamTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Founded</th>
            <th>City</th>
            <th>Venue</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}