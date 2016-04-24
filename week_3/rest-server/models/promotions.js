var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

//create schema
var promoSchema = new Schema({
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
    label:{
        type: String,
        default: '',
        required: true
    },
    //stored on a server-side as a string eg: "4.99"
    price:{
        type: Currency,
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
var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;