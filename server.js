const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const teams = require("./routes/api/teams");
const players = require("./routes/api/players");
const games = require("./routes/api/games");
const teamcomments = require("./routes/api/teamcomments");


const app = express();
var cors = require('cors');
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/teams", teams);
app.use("/api/users", users);
app.use("/api/players", players);
app.use("/api/games", games);
app.use("/api/teamcomments", teamcomments);

const port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Turkish Player Incentive Bonus System Backend');
})

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
