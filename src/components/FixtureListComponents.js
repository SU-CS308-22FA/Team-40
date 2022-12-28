import React, { Component } from "react";
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
export default class FixtureList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fixtures: []
    };
  }
  componentDidMount() {
    axios.get('https://backend308.onrender.com/api/fixtures/getfixtures')
      .then(res => {
        this.setState({
          fixtures: res.data
        });
        var table = document.querySelector("#table");
        for(var i = 1; i < table.rows.length;i++){
          table.rows[i].cells[0].innerHTML ="<img src='"+table.rows[i].cells[0].innerHTML+"'/>";
          table.rows[i].cells[5].innerHTML ="<img src='"+table.rows[i].cells[5].innerHTML+"'/>";
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    const columns = [
      {
        dataField: 'teams.home.logo',
        text: 'Home Logo',
        sort: false, 
      }, 
      {
      dataField: 'teams.home.name',
      text: 'Home Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'goals.home',
      text: 'Home Goals',
      sort: true
    }, {
      dataField: 'goals.away',
      text: 'Away Goals',
      sort: true
    }, {
      dataField: 'teams.away.name',
      text: 'Away Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'teams.away.logo',
      text: 'Away Logo',
      
    },  {
        dataField: 'fixture.referee',
        text: 'Referee',
        sort: true,
        filter: textFilter()
    }, {
        dataField: 'fixture.date',
        text: 'Date',
        sort: true
    },
    /*{
       dataField: 'team.id',
      text: 'Profile',
      sort: false,
      formatter: (rowContent, row) => {
        var teamLink = "https://cs308team40.netlify.app/fixtures/"+ rowContent;
        return (   
          <a href={teamLink}>Go to Page</a>
        )
      } 
    }*/
    ];

    return (<div className="table-wrapper">
      
      <BootstrapTable keyField='teams.home.logo' data={ this.state.fixtures } columns={ columns } filter={ filterFactory() } id="table"  />
    </div>);
  }
}