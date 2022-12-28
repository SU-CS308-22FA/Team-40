const mongoose = require("mongoose");
const VenueSchema = mongoose.Schema({
    id: Number,
    name:String,
    city:String, 
  });
const NestedFixtureSchema = mongoose.Schema({
    id: Number,
    referee:String,
    date:String,
    venue:VenueSchema,
  });
const HomeSchema = mongoose.Schema({
    id: Number,
    name:String,
    logo:String, 
    winner:Boolean
});
const AwaySchema = mongoose.Schema({
    id: Number,
    name:String,
    logo:String, 
    winner:Boolean
    });

const NestedTeamsSchema = mongoose.Schema({
    home: HomeSchema,
    away: AwaySchema
  });
const GoalsSchema = mongoose.Schema({
    home: Number,
    away: Number
});
  
  
  
const FixtureSchema = mongoose.Schema({
  fixture: NestedFixtureSchema,
  teams: NestedTeamsSchema,
  goals: GoalsSchema
});
  
module.exports = Fixture = mongoose.model("fixtures", FixtureSchema);
