const  Mongoose  = require("mongoose");


const schema = Mongoose.Schema({
    id_client :{
        type: String,
        required: true,
        unique:true
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
        type: Number,
        min: 600000000,
        max: 699999999
    }

});

module.exports = Mongoose.model('customer', schema);