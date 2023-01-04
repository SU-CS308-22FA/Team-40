const mongoose = require("mongoose");

const NestedCandidateSchema = mongoose.Schema({
  name: String,
  avatar: String,
  club: String,
  club_logo: String, 
  id: Number,
  voters: Array,
  votes: { type: Number, default: 0 }
});

const CandidateSchema = mongoose.Schema({
  candidate: NestedCandidateSchema,
});

CandidateSchema.methods.vote = function () {
  this.candidate.votes += 1;
  console.log("Vote registered");
  return this.save();
  
};

module.exports = Candidate = mongoose.model("candidates", CandidateSchema);
