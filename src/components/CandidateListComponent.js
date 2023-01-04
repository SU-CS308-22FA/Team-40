import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CandidateTableRow from "./CandidateTableRow";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
export default class CandidateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
    this.options = {
      defaultSortName: "name", // default sort column name
      defaultSortOrder: "desc", // default sort order
    };
  }
  componentDidMount() {
    axios
      .get("https://backend308.onrender.com/api/candidates/getcandidates")
      .then((res) => {
        this.setState({
          candidates: res.data,
        });
        var table = document.querySelector("#table");
        for (var i = 1; i < table.rows.length; i++) {
          table.rows[i].cells[0].innerHTML =
            "<img src='" + table.rows[i].cells[0].innerHTML + "'/>";
          table.rows[i].cells[2].innerHTML =
            "<img src='" + table.rows[i].cells[2].innerHTML + "'/>";
          console.log(table.rows[i].cells[1].innerHTML);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    const myData = [...this.state.candidates];
    return myData.map((res, i) => {
      return <CandidateTableRow obj={res} key={i} />;
    });
  }

  render() {

    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
