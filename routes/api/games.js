const express = require('express')
const Game = require('../../models/Game')
const router = express.Router()
router.get('/getgames', (req, resp)=>{
    Game.find().then(data => {
        console.log("getgames called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})


module.exports = router;