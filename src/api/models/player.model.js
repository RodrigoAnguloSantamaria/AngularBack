const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema(
    {
        name: {type: String, required: true},
        image: {type:String},
        characteristics:{type:{
            position:{type:String, required:true},
            MVPs:{type:Number},
            championships:{type:Number},
            team:{type:String, required:true}

        }}
        
    }
)

const Player = mongoose.model('players', playerSchema);

module.exports = Player;