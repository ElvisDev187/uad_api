const mongoose=require("mongoose");


const workerSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        min:4
    },
    prenom:{
        type:String,
        required:true
    },
    tel:{
        type:Number,
        required:true,
        min:6,

    },
    matricule:{
        type:String,
        required:true,
    },
    mdp:{
        type:String,
        required:true,
        min:7,
        
    },
    statut:{
        type:Boolean,
        required:true
    }

});

module.exports=mongoose.model("worker",workerSchema);