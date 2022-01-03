const mongoose = require('mongoose');

const schema = mongoose.Schema({

    id_payment:{
        type:String,
        required: true
    },
    versement:{
      type: Number,
      required: true
    },
    reste:{
       type: Number,
       required: true
    },
    id_contrat:{
        type:String,
        required: true
    }


});

module.exports = mongoose.model('payment', schema)

