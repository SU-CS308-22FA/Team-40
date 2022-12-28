const express = require('express')
const Fixture = require('../../models/Fixture')
const router = express.Router()
router.get('/getfixtures', (req, resp)=>{
    Fixture.find().then(data => {
        console.log("getfixtures called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

router.get('/getfixtures/:fixtureid', (req, resp)=>{
    Fixture.findOne( {"fixture.id" : req.params["fixtureid"]}).then(data => {
        console.log("find one called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})

module.exports = router;