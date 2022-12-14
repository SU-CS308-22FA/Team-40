import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TeamPage.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postTeamCommentsAPI, getSingleTeamCommentsAPI, deleteTeamCommentsAPI  } from '../actions/teamCommentActions'
import CreateTeamComment from './CreateTeamComment';
import TeamCommentTable from "./TeamCommentTable";
/**
 * Exporting team page component to create the a profile page for each team
 * @param {*} props auth brings the jwt token info, username and userid, match brings the team data
 * @returns Exporting TeamPage component
 */
const TeamPage = (props) => {
  const {
    params: { teamid },
  } = props.match;

  const [comments, setComments] = useState([])
  useEffect(() => {
    getSingleTeamCommentsAPI(teamid).then(comments => setComments(comments))
  }, [teamid]);

  const addComment = (comment) => {
    postTeamCommentsAPI(comment).then(data => {
      setComments([...comments, data])
    })
  }

  const deleteComment = (id) => {
    deleteTeamCommentsAPI(id).then(data => {
      if (data.deletedCount === 1) {
        setComments(comments.filter(comment => comment._id !== id))
      }
    })
  }
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect((props) => {
    fetch(`https://backend308.onrender.com/api/teams/getteams/${teamid}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://backend308.onrender.com/api/teams/getteams/${teamid}`);
        console.log(props);
      })
      .catch((error) => console.log(error));
  }, [teamid]);
  var name = "You are not logged in";
    if (props.auth.user.name!= null) {
      name = props.auth.user.name;
    }
  return (
    
    <div className="team-page">
      {!isLoading && (
        <>
          <h1>Current User: {name}</h1>
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
          <div>
            <CreateTeamComment onCreate={addComment} match={props.match}/>
            <TeamCommentTable comments={comments} onDelete={deleteComment} userid={props.auth.user.id}/>
          </div>
        </>
      )}
    </div>
  );
};

TeamPage.propTypes = {
  auth: PropTypes.object.isRequired
}; 

function mapStateToProps(state) {
  return { auth: state.auth };
} 
export default connect(
  mapStateToProps
)(TeamPage);

