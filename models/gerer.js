const mongoose=require('mongoose');

const gererSchema=mongoose.Schema({
    id_assistant:{
        type:String,
        required:true
    },
    id_contrat:{
        type:String,
        required:true
    },
    id_chef:{
        type:String,
        required:true
    },
    fonction:{
        type:String
    }
})

module.exports=mongoose.model("gerer",gererSchema)