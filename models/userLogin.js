const mongoose = require('mongoose');

const schema = mongoose.Schema({
    matricule:{
        type: String,
        required: true
    },
    mpd:{
        type:String,
        require:true,
        min: 7
    }
});

module.exports = mongoose.model('userLogin', schema);