import React, { Component } from "react";
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class PlayerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    };
    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
  }
  componentDidMount() {
    axios.get('https://backend308.onrender.com/api/players/getplayers')
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {

    const columns = [{
      dataField: 'player.name',
      text: 'Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'statistics[0].team.name',
      text: 'Club',
      sort: true,
    },
    {
        dataField: 'statistics[0].league.name',
        text: 'League',
        sort: true,
      },
    
     {
      dataField: 'player.age',
      text: 'Age',
      sort: true,
    }, {
      dataField: 'player.nationality',
      text: 'Nation',
      sort: true,
      filter: textFilter({defaultValue: 'Turkey'})
    },
    {
        dataField: 'statistics[0].games.position',
        text: 'Position',
        sort: true
      },
    {
        dataField: 'statistics[0].games.appearances',
        text: 'Appear',
        sort: true
      },
      {
        dataField: 'statistics[0].games.minutes',
        text: 'Minutes',
        sort: true
      },
    {
      dataField: 'statistics[0].games.rating',
      text: 'Rating',
      sort: true
    }];

    return (<div className="table-wrapper">
      
      <BootstrapTable keyField='name' data={ this.state.players } columns={ columns } filter={ filterFactory() }  pagination={ paginationFactory() } />
    </div>);
  }
}