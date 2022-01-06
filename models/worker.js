const mongoose=require("mongoose");


const workerSchema=new mongoose.Schema({
    id_worker :{
        type: String,
        required: true,
        unique:true
    },
    id_poste :{
        type: String,
        required: true
    },
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
        min: 600000000,
        max: 699999999

    },
    matricule:{
        type:String,
        required:true,
        unique:true
    },
    mdp:{
        type:String,
        required:true,
        min:7,
        
    },
    statut:{
        type:Boolean,
        required:true,
        default:true
    },
    date_embauche:{
        type:Date,
        default:Date.now()
    }

});

module.exports=mongoose.model("worker",workerSchema);