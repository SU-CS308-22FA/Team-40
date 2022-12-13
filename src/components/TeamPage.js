/*
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
const TeamPage = ({ match }) => {
    const {
      params: { teamid },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(`http://localhost:5000/api/teams/getteams/${teamid}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setIsLoading(false);
          console.log(`http://localhost:5000/api/teams/getteams/${teamid}`);
        })
        .catch((error) => console.log(error));
    }, [teamid]);
  
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
*/

import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./TeamPage.css";

const TeamPage = ({ match }) => {
  const {
    params: { teamid },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/teams/getteams/${teamid}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`http://localhost:5000/api/teams/getteams/${teamid}`);
      })
      .catch((error) => console.log(error));
  }, [teamid]);

  return (
    <div className="team-page">
      {!isLoading && (
        <>
          <div className="team-logo-name">
          <h1>Name: {data.team.name}</h1>
          <img src={data.team.logo} alt="Team logo" />
          </div>
          <div className="team-info">
          <h2>Founded: {data.team.founded}</h2>
          <h2>Stadium Name: {data.venue.name}</h2>
          <img src={data.venue.image} alt="Stadiumimage" />
          <h2>Capacity: {data.venue.capacity}</h2>
          <h2>Address: {data.venue.address}</h2>
          </div>
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
          <Link
            to="/teams"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
            }}
            className="btn btn-large btn-flat waves-effect blue accent-3 white-text d-flex justify-content-center align-items-center"
          >
            Teams
          </Link>
        </>
      )}
    </div>
  );
};

export default TeamPage;
