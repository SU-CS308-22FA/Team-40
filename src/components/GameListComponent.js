import React, { Component } from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import GameTableRow from "./GameTableRow";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    this.options = {
      defaultSortName: "name", // default sort column name
      defaultSortOrder: "desc", // default sort order
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/games/getgames")
      .then((res) => {
        this.setState({
          games: res.data,
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
    const myData = [...this.state.games];
    return myData.map((res, i) => {
      return <GameTableRow obj={res} key={i} />;
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

/*
        <BootstrapTable
          keyField="game.home"
          data={this.state.games}
          columns={columns}
          filter={filterFactory()}
          id="table"
        />
*/
