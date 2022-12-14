const keys = require("../../config/keys");

const express = require("express");
const Player = require("../../models/Player");
const router = express.Router();
router.get("/getplayers", (req, resp) => {
  Player.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});

router.get("/getplayers/:playerid", (req, resp) => {
  Player.findOne({ "player.id": req.params["playerid"] })
    .then((data) => {
      console.log("find one player called");
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});

module.exports = router;
