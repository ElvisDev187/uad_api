const mongoose=require("mongoose");


const contratSchema= mongoose.Schema({
    id_contrat:{
        type:String,
        required:true,
        unique:true
    },
    id_facture:{
        type:String,
        required:true,
        default:"false"
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
    },
    statut:{
        type:String,
        required:false,
        default:"false"
    }

})

module.exports=mongoose.model("contrat",contratSchema);
