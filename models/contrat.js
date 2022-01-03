const mongoose=require("mongoose");


const contratSchema= mongoose.Schema({
    id_contrat:{
        type:String,
        required:true
    },
    id_facture:{
        type:String,
        required:true
    },
    id_service:{
        type:String,
        required:true
    },
    id_client:{
        type:String,
        required:true
    },
    libelle:{
        type:String,
        required:true,
        min:10
    },
    montant:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("contrat",contratSchema);