import './App.css';
import {useState} from "react"
import Axios from 'axios'
function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    Axios.post("https://team40.herokuapp.com/register", 
    {
      username: username,
      email: email,
      first_name: firstname,
      last_name: lastname,
      password: password,
    }).then(() => {
      console.log("success registering")
    });
  };

  const showUsers = () => {
    Axios.get("https://team40.herokuapp.com/listuser").then(() => {
      console.log("showuserlistuser")
    });
  };


  return (
    <div className="App">
      <div className="information">
        <label>Username:</label>
        <input 
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        />
        <label>Email:</label>
        <input 
        type="email"
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
        <button onClick={showUsers}>Show Users</button>
        
      </div>
    </div>
  );
}

export default App;
