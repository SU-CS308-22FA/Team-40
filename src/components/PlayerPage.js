import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PlayerPage.css";


/**
 * PlayerPage component
 *
 * @param {Object} props - The component's props
 * @param {Object} props.match - The match object from React Router
 * @param {Object} props.match.params - The URL parameters from the route
 * @param {string} props.match.params.playerid - The ID of the player
 * @returns {React.Component} The PlayerPage component
 */
const PlayerPage = ({ match }) => {
  const {
    params: { playerid },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://backend308.onrender.com/api/players/getplayers/${playerid}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://backend308.onrender.com/api/players/getplayers/${playerid}`);
      })
      .catch((error) => console.log(error));
  }, [playerid]);

  return (
    //lhs: player name,player photo
    //rhs: player rating, player team name
    //bottom: player stats (bootstrap table with filtered to only show the player)
    <>
      {!isLoading && (
        <>
          <center>
            <table>
              <tr>
                <td>
                  <center>
                    <img src={data.player.photo} alt="Playerimage"></img>
                  </center>
                </td>
                <td>
                  <center>
                    <br></br>
                    <p>RATING</p>
                    <h1>{data.statistics[0].games.rating.substring(0, 3)}</h1>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <h4>
                      {data.player.firstname + " " + data.player.lastname}
                    </h4>
                  </center>
                </td>
                <td>
                  <center>
                    <h4>{data.statistics[0].team.name}</h4>
                  </center>
                </td>
              </tr>
            </table>
          </center>
          <center>
          </center>
          <center>
            <table>
              <tr>
                <th>Age</th>
                <th>Nation</th>
                <th>Lineups</th>
                <th>Minutes</th>
                <th>Number</th>
                <th>Position</th>
                
              </tr>
              <tr>
                <td>{data.player.age}</td>
                <td>{data.player.nationality}</td>
                <td>{data.statistics[0].games.lineups}</td>
                <td>{data.statistics[0].games.minutes}</td>
                <td>{data.statistics[0].games.number}</td>
                <td>{data.statistics[0].games.position}</td>
                
              </tr>
            </table>
          </center>
          <br></br>
            <br></br>
            <center><h3><em>STATISTICS</em></h3></center>
          <br></br>
          <center>
            <table>
              <tr>
                <th>Appearances</th>
                <th>Goals Scored</th>
                <th>Key Passes</th>
                <th>Duels Won</th>
                <th>Successful Dribbles</th>
                <th>Fouls Committed</th>
                <th>Rating</th>
              </tr>
              <tr>
              <td>{data.statistics[0].games.appearances}</td>
                <td>{data.statistics[0].goals.total}</td>
                <td>{data.statistics[0].passes.key}</td>
                <td>{data.statistics[0].duels.won}</td>
                <td>{data.statistics[0].dribbles.success}</td>
                <td>{data.statistics[0].fouls.committed}</td>
                <td>{data.statistics[0].games.rating.substring(0, 3)}</td>
              </tr>
            </table>
          </center>
          <center>
            <table>
              <tr>
                <td>
                  <center>
                    <div className="col s6 d-flex justify-content-center">
                      <Link
                        to="/"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                        }}
                        className="btn btn-large btn-flat waves-effect blue accent-3 white-text d-flex justify-content-center align-items-center"
                      >
                        Home
                      </Link>
                    </div>
                  </center>
                </td>
                <td>
                  <center>
                    <div className="col s6 d-flex justify-content-center">
                      <Link
                        to="/players"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                        }}
                        className="btn btn-large btn-flat waves-effect blue accent-3 white-text d-flex justify-content-center align-items-center"
                      >
                        Players
                      </Link>
                    </div>
                  </center>
                </td>
              </tr>
            </table>
          </center>
        </>
      )}{" "}
    </>
  );
};
export default PlayerPage;
