const express = require('express')
const Candidate = require('../../models/Candidate')
const router = express.Router()
router.get('/getcandidates', (req, resp)=>{
    Candidate.find().then(data => {
        console.log("getcandidates called")
        resp.json(data)
    }).catch(e => {
        resp.json({message : e})
    })
})


  
  router.post("/vote/:id", (req, res) => {
    Candidate.findById(req.params.id)
      .then((candidate) => {
        candidate.vote();
        res.json({ votes: candidate.votes });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });
  
  module.exports = router;
  