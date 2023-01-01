const mongoose = require("mongoose");

const NestedTeamSchema = mongoose.Schema({
  id:Number,
  name:String,
  logo:String,
});

  const NestedStatisticsSchema = mongoose.Schema({
    type:String,
    value:String
  });

  const NestedResponseSchema = mongoose.Schema({
    team: NestedTeamSchema,
    statistics: [NestedStatisticsSchema]
  });
  
  const StatisticSchema = mongoose.Schema({
    response: [NestedResponseSchema]
  });
  
  module.exports = Statistic = mongoose.model("statistics", StatisticSchema);
