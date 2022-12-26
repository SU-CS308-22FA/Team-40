const express = require('express')
const PlayerComment = require('../../models/PlayerComment')
const router = express.Router()
router.get('/getplayercomments', (req, resp)=>{
    PlayerComment.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.get('/getplayercomments/:playerid', (req, resp)=>{
    PlayerComment.find({"playerid" : req.params["playerid"]}).then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.post('/postplayercomments', (req, resp)=>{
    const playerComment = new PlayerComment({
        userid: req.body.userid,
        comtext: req.body.comtext,
        playerid: req.body.playerid,
        username: req.body.username
    })
    playerComment.save().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
router.patch('/patchplayercomments/:id', (req, resp) => {
    PlayerComment.updateOne({_id: req.params.id}, {
            $set: {
                userid: req.body.userid,
                comtext: req.body.comtext,
                playerid: req.body.playerid,
                username: req.body.username
            }
        }).then(data => {
                resp.json(data)
        }).catch(e => {
                resp.json({message: e})
        })
})
router.delete('/deleteplayercomments/:id', (req, resp)=>{
    PlayerComment.deleteOne({_id: req.params.id})
    .then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({message: e})
    })
})
module.exports = router;