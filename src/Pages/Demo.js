import '../App.css';
import {useState} from "react"
import Axios from 'axios'
const Demo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const [userList, setUserList] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const registerUser = () => {
    Axios.post("https://team40.herokuapp.com/register", 
    {
      username: username,
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password,
    }).then(() => {
      console.log("Success registering")
      setUserList([...userList, {
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
      }])
      
    });
  };

  const showUsers = () => {
    Axios.get("https://team40.herokuapp.com/listuser").then((response) => {
      console.log("You clicked show users");
      setUserList(response.data)
    });
  };

  const updateUsername = (email) => {
    Axios.put(`https://team40.herokuapp.com/updateusername/${email}`, null, { params: {
      username: newUsername
    }}
    ).then((response) => {
      console.log(response);
    });
  };

  const deleteUser = (email) => {
    Axios.delete(`https://team40.herokuapp.com/deleteuser/${email}`
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="Demo">
      <div className="signUp">
        <label>Username:</label>
        <input 
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        />
        <label>Email:</label>
        <input 
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        />
        <label>First Name:</label>
        <input 
        type="text"
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
        />
        <label>Last Name:</label>
        <input 
        type="text"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
        />
        <label>Password:</label>
        <input 
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        />
        <button onClick={registerUser}>Sign Up</button>
      </div>

      <div className='showUsers'>
        <button onClick={showUsers}>Show Users</button>
        {userList.map((val, key) => {
          return (
              <div className='users'>
                <div>
                <h3>Userame: {val.username}</h3>
                <h3>Email: {val.email}</h3>
                <h3>First name: {val.first_name}</h3>
                <h3>Last name: {val.last_name}</h3>
                <h3>Password: {val.password}</h3>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter new username"
                    onChange={(event) => {
                      setNewUsername(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateUsername(val.email);
                    }}
                  >
                    Update Username
                  </button>
                </div>
                <div>
                <button
                    onClick={() => {
                      deleteUser(val.email);
                    }}
                  >
                    Delete User
                  </button>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Demo;