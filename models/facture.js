const mongoose =require('mongoose');

const factureSchema=mongoose.Schema({
    id_facture:{
        type:String,
        required:true
    },
    id_client:{
        type:String,
        required:true
    },
    id_worker:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("facture",factureSchema)