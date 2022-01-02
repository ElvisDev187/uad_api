const {MODELS}=require("../models/index");
const workerModel= MODELS.worker
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const {workerRegisterValidation,workerLoginValidation}=require("../validations/workerValidation");

exports.getAll=(req,res)=>{
    workerModel.find()
    .then(result=>{
        res.send(result)
    })
    .then(e=>{
        res.send(e)
    })
}

exports.getSpecific=async (req,res)=>{
    try{
        const workerFind= await workerModel.find(req.body)
        res.send(workerFind)
     }catch(e){
        console.log(e)
        res.status(400).send("erreur veuillez verifier votre connexion internet")
    }
}
exports.register=async (req,res)=>{
    
    const {error}=workerRegisterValidation(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});


    //hasher le mot de passe
    const salt= await bcrypt.genSalt(10);
    const mdp= await bcrypt.hash(req.body.mdp,salt);
        const worker=new workerModel({
        id_worker:req.body.id_worker,
        id_poste:req.body.id_poste,
        nom:req.body.nom,
        prenom:req.body.prenom,
        tel:req.body.tel,
        matricule:req.body.matricule,
        mdp:mdp,
        statut:req.body.statut
        });
       
        try{
            console.log(worker)
            const savedUser=await worker.save();
            console.log("reussie")
            console.log(worker)
            res.send(savedUser)
        }catch(e){
            console.log(e)
            res.status(400).send("erreur verifier votre connexion internet")
        }

}
exports.login=async (req,res)=>{
    const error=workerLoginValidation(req.body).error
    if(error) return res.status(400).send({message:error.details[0].message});

    //cherchons l'employé à partir du matricule
    const this_worker=await workerModel.findOne({matricule:req.body.matricule})
    if(!this_worker) return res.status(400).send("aucun employé n'est enrégistré sous ce matricule");
    const mdp=await bcrypt.compare(req.body.mdp,this_worker.mdp);
     if(!mdp) return res.status(400).send("mot de passe incorrect");
     try{
    const token=jwt.sign({_id:this_worker._id},process.env.TOKEN_KEY);
    req.header("auth-token",token);
    res.send(true)
    }catch(e){
        console.log(e)
        res.status(400).send("erreur ,verifier votre connexion internet")
    }
    

}
exports.delete=async (req,res)=>{
    workerModel.deleteMany(req.body)
   .then(()=>{
   res.send("true")
   })
   .catch(e=>{
   console.log(e)
   res.status(400).send("erreur ,verifier votre connexion internet")
   })
}

exports.patch=async (req,res)=>{
    await workerModel.updateOne({_id:req.params.workerId},{$set:req.body})
    .then(function(){
         res.send(true)
    })
    .catch(function(e){
            console.log(e)
            res.status(400).send("erreur veuillez verifier votre connexion internet")
    })  
    }

