import React, { Component } from 'react';
export default class TeamTableRow extends Component {
    render() {
        return (
            <tr>
                <td><img src= {this.props.obj.team.logo}/></td>
                <td>{this.props.obj.team.name}</td>
                <td>{this.props.obj.team.founded}</td>
                <td>{this.props.obj.venue.city}</td>
                <td>{this.props.obj.venue.name}</td>
                <td>{this.props.obj.venue.capacity}</td>
            </tr>
        );
    }
}