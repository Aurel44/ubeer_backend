const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beerSchema = new Schema({
    id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Beer', beerSchema);