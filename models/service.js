const mongoose = require('mongoose');


const serviceSchema = mongoose.Schema({

    id_service:{
        type: Number,
        required: true
    },
    libelle:{
        type: String,
        required: true,
        min: 10,
        max: 255
    },
    description:{
        type: String,
        required: true,
        min: 50,
    },
    tarif_base:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Service', serviceSchema);