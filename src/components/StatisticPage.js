import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProgressBar from "@ramonak/react-progress-bar";
const StatisticPage = (props) => {
  const {
    params: { statisticid },
  } = props.match;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect((props) => {
    fetch(`https://backend308.onrender.com/api/statistics/getstatistics/${statisticid}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://backend308.onrender.com/api/statistics/getstatistics/${statisticid}`);
        console.log(props);
      })
      .catch((error) => console.log(error));
  }, [statisticid]);
  var name = "You are not logged in";
    if (props.auth.user.name!= null) {
      name = props.auth.user.name;
    }
  return (
    
    <div className="statistic-page">
      {!isLoading && (
        <>
          <div className="statistic-logo-name"> <center>
          <h1>Current User: {name}</h1>
          <table>
          <tr>
                <td><center><img src= {data.response[0].team.logo} alt={data.response[0].team.logo}/></center></td>
                <td>
                    <center>
                    <table>
                        <tr>
                            <table>
                                <tr> <td><center>{data.response[0].team.name}</center></td> <td><center><strong>vs</strong></center></td> <td><center>{data.response[1].team.name}</center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[0].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[0].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[0].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[1].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[1].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[1].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[2].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[2].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[2].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[3].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[3].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[3].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[4].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[4].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[4].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[5].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[5].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[5].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[6].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[6].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[6].value} /></td> </tr>
                            </table>
                        </tr>
                        
                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[7].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[7].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[7].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[8].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[8].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[8].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[9].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[9].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[9].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[10].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[10].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[10].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[11].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[11].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[11].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[12].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="25" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[12].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="25" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[12].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[13].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="750" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[13].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="750" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[13].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[14].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar maxCompleted="750" bgColor="blue" labelSize="10px" completed={data.response[0].statistics[14].value} dir="rtl"/></td> <td><ProgressBar maxCompleted="750" labelSize="10px" bgColor="blue" completed={data.response[1].statistics[14].value} /></td> </tr>
                            </table>
                        </tr>

                        <tr>
                            <table>
                                <tr>  <td><center><strong>{data.response[0].statistics[15].type}</strong></center></td> </tr>
                            </table>
                        </tr>
                        <tr>
                            <table>
                                <tr> <td><ProgressBar bgColor="blue" labelSize="10px" completed={data.response[0].statistics[15].value} dir="rtl"/></td> <td><ProgressBar labelSize="10px" bgColor="blue" completed={data.response[1].statistics[15].value} /></td> </tr>
                            </table>
                        </tr>
                    </table>
                    </center>
                </td>
                <td><center><img src= {data.response[1].team.logo} alt={data.response[1].team.logo}/></center></td>
            </tr>
            </table>
            <div>
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
                <br></br>
                <Link
                    to="/games"
                    style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    }}
                    className="btn btn-large btn-flat waves-effect blue accent-3 white-text d-flex justify-content-center align-items-center"
                >
                    Games
                </Link>
            </div>
            </center>
          </div>


            
        </>
      )}
    </div>
  );
};

StatisticPage.propTypes = {
  auth: PropTypes.object.isRequired
}; 

function mapStateToProps(state) {
  return { auth: state.auth };
} 
export default connect(
  mapStateToProps
)(StatisticPage);

