var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//create schema
var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    //label by default is empty
    designation:{
        type: String,
        required: true
    },
    abbr:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

//create module
var Leaderships = mongoose.model('Leadership', leadershipSchema);

module.exports = Leaderships;