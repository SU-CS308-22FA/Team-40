const express = require('express')
const Team = require('../../models/Team')
const router = express.Router()
router.get('/getteams', (req, resp)=>{
    Team.find().then(data => {
        console.log("getteams called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.get('/getteams/:teamid', (req, resp)=>{
    Team.findOne( {"team.id" : req.params["teamid"]}).then(data => {
        console.log("find one called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

module.exports = router;