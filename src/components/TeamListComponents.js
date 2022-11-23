import React, { Component } from "react";
import axios from 'axios';
//import Table from 'react-bootstrap/Table';
import TeamTableRow from './TeamTableRow';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default class TeamList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: []
    };
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
  }
  componentDidMount() {
    axios.get('https://backend308.onrender.com/api/teams/getteams')
      .then(res => {
        this.setState({
          teams: res.data
        });
        var table = document.querySelector("#table");
        for(var i = 1; i < table.rows.length;i++){
          table.rows[i].cells[0].innerHTML ="<img src='"+table.rows[i].cells[0].innerHTML+"'/>";

        }
      })

      .catch((error) => {
        console.log(error);
      })
  }
 
  DataTable() {
    const venueSizeData = [...this.state.teams].sort((a, b) => (a.venue.capacity > b.venue.capacity ? -1 : 1));
    return venueSizeData.map((res, i) => {
      return <TeamTableRow obj={res} key={i} />;
    });
  }

  
  render() {
    

    const columns = [
      {
        dataField: 'team.logo',
        text: 'Logo',
        sort: false,
      }, 
      {
      dataField: 'team.name',
      text: 'Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'team.founded',
      text: 'Founded',
      sort: true
    }, {
      dataField: 'venue.name',
      text: 'Stadium'
    }, {
      dataField: 'venue.capacity',
      text: 'Capacity',
      sort: true
    }, {
      dataField: 'venue.city',
      text: 'City',
      sort: true
    }];

    return (<div className="table-wrapper">
      
      <BootstrapTable keyField='name' data={ this.state.teams } columns={ columns } filter={ filterFactory() } id="table"  />
    </div>);
  }
}