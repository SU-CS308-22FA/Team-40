const mongoose = require("mongoose");

const NestedGameSchema = mongoose.Schema({
    home_id: Number,
    away_id: Number,
    home:String,
    away:String,
    home_winrate: Number,
    away_winrate: Number,
    draw_rate: Number,
    date: String,
    time: String,
    home_logo: String,
    away_logo: String,
    stadium: String
  });
  
  const GameSchema = mongoose.Schema({
    game: NestedGameSchema,
  });
  
  module.exports = Game = mongoose.model("games", GameSchema);