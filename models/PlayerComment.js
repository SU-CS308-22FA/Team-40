const mongoose = require('mongoose')
const PlayerCommentSchema = mongoose.Schema({
    userid:{
        type: String,
    },
    comtext:{
        type: String,
        required: true
    },
    playerid:{
        type: String,
    },
    username:{
        type: String,
    }
})
module.exports = PlayerComment = mongoose.model('playerComments', PlayerCommentSchema)