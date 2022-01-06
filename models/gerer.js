const mongoose=require('mongoose');

const gererSchema=mongoose.Schema({
    id_assistant:{
        type:String,
        required:true,
        default:"false"
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
        type:String,
        required:true,
        default:"Responsable de tout concernant ce contrat"
    }
})

module.exports=mongoose.model("gerer",gererSchema)