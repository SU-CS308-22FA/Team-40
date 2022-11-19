const express = require('express')
const Team = require('../../models/Team')
const router = express.Router()
router.get('/getteams', (req, resp)=>{
    Team.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})
module.exports = router;