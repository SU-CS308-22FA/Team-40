const mongoose = require("mongoose");

const NestedTeamSchema = mongoose.Schema({
    id: Number,
    name:String,
    code:String,
    country:String,
    founded:Number,
    national:Boolean,
    logo:String,
  });
  
  const VenueSchema = mongoose.Schema({
    id: Number,
    name:String,
    address:String,
    city:String,
    capacity:Number,
    surface:String,
    image:String,
  });
  
  const TeamSchema = mongoose.Schema({
    team: NestedTeamSchema,
    venue: VenueSchema
  });
  
  module.exports = Team = mongoose.model("teams", TeamSchema);
