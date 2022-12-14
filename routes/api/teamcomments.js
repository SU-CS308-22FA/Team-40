const express = require('express')
const TeamComment = require('../../models/TeamComment')
const router = express.Router()
router.get('/getteamcomments', (req, resp)=>{
    TeamComment.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.get('/getteamcomments/:teamid', (req, resp)=>{
    TeamComment.find({"teamid" : req.params["teamid"]}).then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.post('/postteamcomments', (req, resp)=>{
    const teamComment = new TeamComment({
        userid: req.body.userid,
        comtext: req.body.comtext,
        teamid: req.body.teamid,
        username: req.body.username
    })
    teamComment.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
router.patch('/patchteamcomments/:id', (req, resp) => {
    TeamComment.updateOne({_id: req.params.id}, {
            $set: {
                userid: req.body.userid,
                comtext: req.body.comtext,
                teamid: req.body.teamid,
                username: req.body.username
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
router.delete('/deleteteamcomments/:id', (req, resp)=>{
    TeamComment.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
module.exports = router;