const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
       id_poste :{
           type: String,
           required: true,
           unique:true
       },
       nom_poste:{
           type: String,
           required: true,
           min: 6,
           max: 255
       },
       salaire:{
           type: Number,
           required: true,
           min: 36776
       },
       grade:{
           type: Number,
           required: true
       }

})


module.exports = mongoose.model('Poste', postSchema);