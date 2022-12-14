import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
export default class GameTableRow extends Component {
    render() {
        return (
            <tr>
                <td><center><img src= {this.props.obj.game.home_logo} alt={this.props.obj.game.home}/></center></td>
                <td>
                    <center>
                    <table>
                        <tr>
                            <table>
                                <tr><td><center>{this.props.obj.game.date}</center></td><td><center>{this.props.obj.game.time}</center></td></tr>
                            </table>
                        </tr>
                        <tr>
                            <td><center>{this.props.obj.game.stadium}</center></td>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><center>{this.props.obj.game.home}</center></td> <td><center><strong>vs</strong></center></td> <td><center>{this.props.obj.game.away}</center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><center><ProgressBar bgColor="blue" labelSize="10px" completed={this.props.obj.game.home_winrate} /></center></td> <td><center><ProgressBar labelSize="10px" bgColor="blue" completed={this.props.obj.game.draw_rate} /></center></td> <td><center><ProgressBar labelSize="10px" bgColor="blue" completed={this.props.obj.game.away_winrate} /></center></td> </tr>
                            </table>
                        </tr>
                    </table>
                    </center>
                </td>
                <td><center><img src= {this.props.obj.game.away_logo} alt={this.props.obj.game.away}/></center></td>
            </tr>
        );
    }
}