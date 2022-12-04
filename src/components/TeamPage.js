import React from "react";
const TeamPage = ({ match }) => {
    const {
      params: { teamid },
    } = match;
  
    return (
      <p>heyo ${teamid}</p>
    );
  };
export default TeamPage