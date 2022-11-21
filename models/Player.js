const mongoose = require("mongoose");

const BirthSchema = mongoose.Schema({
  date:String,
  place:String,
  country:String,
});

const NestedPlayerSchema = mongoose.Schema({
    id: Number,
    name:String,
    firstname:String,
    lastname:String,
    age:Number,
    birth:BirthSchema,
    nationality:String,
    height:String,
    weight:String,
    injured:Boolean,
    photo:String,
  });

  const PlayerTeamSchema = mongoose.Schema({
    id: Number,
    name:String,
    logo:String,
  });
  const LeagueSchema = mongoose.Schema({
    id: Number,
    name:String,
    country:String,
    logo:String,
    flag:String,
    season:String,
  });
  const GamesSchema = mongoose.Schema({
    appearances:Number,
    lineups:Number,
    minutes:Number,
    number:Number,
    position:String,
    rating:String,
    captain:Boolean,
  });
  const SubstitutesSchema = mongoose.Schema({
    in:Number,
    out:Number,
    bench:Number,
  });
/*   const ShotSchema = mongoose.Schema({
    total: Number,
    on:Number,

  }, { supressReservedKeysWarning: true }); */
  const GoalsSchema = mongoose.Schema({
    total:Number,
    conceded:Number,
    assists:Number,
    saves:Number,

  });
  const PassesTeamSchema = mongoose.Schema({
    total:Number,
    key:Number,
    accuracy:Number,

  });
  const TacklesSchema = mongoose.Schema({
    total:Number,
    blocks:Number,
    interceptions:Number,

  });
  const DuelsTeamSchema = mongoose.Schema({
    total:Number,
    won:Number,

  });
  const DribblesSchema = mongoose.Schema({
    attempts:Number,
    success:Number,
    past:Number,

  });
  const FoulsSchema = mongoose.Schema({
    drawn:Number,
    committed:Number,

  });
  const CardsSchema = mongoose.Schema({
    yellow:Number,
    yellowred:Number,
    red:Number,

  });
  const PenaltySchema = mongoose.Schema({
    won:Number,
    commited:Number,
    scored:Number,
    missed:Number,
    saved:Number,
  });


  
  const StatisticsSchema = mongoose.Schema({
    team:PlayerTeamSchema,
    league:LeagueSchema,
    games:GamesSchema,
    substitutes:SubstitutesSchema,
    //shots:ShotSchema,
    goals:GoalsSchema,
    passes:PassesTeamSchema,
    tackles:TacklesSchema,
    duels:DuelsTeamSchema,
    dribbles:DribblesSchema,
    fouls:FoulsSchema,
    cards:CardsSchema,
    penalty:PenaltySchema,
  });
  
  

  const PlayerSchema = mongoose.Schema({
    player: NestedPlayerSchema,
    statistics: [StatisticsSchema]
  });
  
  module.exports = Player = mongoose.model("players", PlayerSchema);
