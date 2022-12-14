import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
const PlayerPage = ({ match }) => {
    const {
      params: { playerid },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(`http://localhost:5000/api/teams/getplayers/${playerid}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setIsLoading(false);
          console.log(`http://localhost:5000/api/players/getplayers/${playerid}`);
        })
        .catch((error) => console.log(error));
    }, [playerid]);
  
    return (
      <>
        {!isLoading && (
          <>
            <h1>Name: {data.team.name}</h1>
            <img src={data.team.logo}></img>
            <h2>Founded: {data.team.founded}</h2>
            <h2>Stadium Name: {data.venue.name}</h2>
            <img src={data.venue.image}></img>
            <h2>Capacity: {data.venue.capacity}</h2>
            <h2>Address: {data.venue.address}</h2>
            <Link to="/">Back to homepage</Link>
          </>
        )}
      </>
    );
  };
export default TeamPage