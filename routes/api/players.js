
const keys = require("../../config/keys");

const express = require('express')
const Player = require('../../models/Player')
const router = express.Router()
router.get('/getplayers', (req, resp)=>{
    Player.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
module.exports = router;