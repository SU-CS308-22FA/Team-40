const keys = require("../../config/keys");

const express = require("express");
const Statistic = require("../../models/Statistic");
const router = express.Router();
router.get("/getstatistics", (req, resp) => {
    Statistic.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});

router.get("/getstatistics/:statisticid", (req, resp) => {
    Statistic.findOne( {"response.team.id": req.params["statisticid"]},)
    .then((data) => {
      console.log("find one statistic called");
      resp.json(data);
    })
    .catch((e) => {
      resp.json({ message: e });
    });
});

module.exports = router;
