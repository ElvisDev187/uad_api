const  Mongoose  = require("mongoose");


const schema = Mongoose.Schema({
    id_client :{
        type: String,
        required: true
    },
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        min: 9,
        max: 9
    }

});

module.exports = Mongoose.model('customer', schema);