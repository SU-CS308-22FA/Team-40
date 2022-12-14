import React, { useState, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
function CreateTeamComment(props) {
    const { onCreate } = props
    var uid = "1";
    var uname = "You are not logged in"
    if(props.auth.user.name){
        uname = props.auth.user.name;
        uid = props.auth.user.id;
    }
    const [comment, setComment] = useState({
        userid: uid,
        comtext: "",
        teamid: props.match.params.teamid
    })
    const onChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }
    const saveComment = (e) => {
        e.preventDefault()
        onCreate(comment)
    }
    console.log("In comment section")
    console.log(props)
    return (
        <Fragment>
                <form onSubmit={saveComment}>
                    <h2 className="text-center m-3">Hello! {uname} Comment</h2>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-5 d-flex justify-content-center m-1">
                            <input type="text" className="form-control" 
                                name = "comtext" placeholder="Comment here"
                                onChange={(e) => onChange(e)}/>
                        </div>
                        <button className='btn btn-primary col-2 d-flex justify-content-center m-1' 
                            type='submit'>Add</button>
                    </div>
                </form>
        </Fragment>
    )
}
CreateTeamComment.propTypes = {
    auth: PropTypes.object.isRequired
  }; 
  
  function mapStateToProps(state) {
    return { auth: state.auth};
  } 
  export default connect(
    mapStateToProps
  )(CreateTeamComment);
  