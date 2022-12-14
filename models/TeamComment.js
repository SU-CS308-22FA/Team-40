const mongoose = require('mongoose')
const TeamCommentSchema = mongoose.Schema({
    userid:{
        type: String,
    },
    comtext:{
        type: String,
        required: true
    },
    teamid:{
        type: String,
    },
    username:{
        type: String,
    }
})
module.exports = TeamComment = mongoose.model('teamComments', TeamCommentSchema)