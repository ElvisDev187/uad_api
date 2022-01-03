const {MODELS}=require("../models/index");
const workerModel= MODELS.worker
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

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

    const worker=new workerModel({
        id_worker:req.body.id_worker,
        id_poste:req.body.id_poste,
        nom:req.body.nom,
        prenom:req.body.prenom,
        tel:req.body.tel,
        matricule:req.body.matricule,
        mdp:req.body.mdp,
        statut:req.body.statut});

        const err = worker.validateSync();
        if(err) return res.status(400).json(err.message)

        const Exist = await workerModel.findOne({id_worker: req.body.matricule});
        if(Exist) return res.status(400).json('L\'employé existe déjà');

    //hasher le mot de passe
    const salt= await bcrypt.genSalt(10);
    const mdp= await bcrypt.hash(req.body.mdp,salt);

    worker.mdp = mdp;
      

       
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

    const user = new MODELS.userLogin({
        matricule: req.boqy.matricule,
        mpd: req.body.mpd
    });

    const err = user.validateSync();
    if(err) return res.status(400).json(err.message)
   
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
   await workerModel.deleteOne({id_worker: req.params.workerId})
   .then(()=>{
   res.send("true")
   })
   .catch(e=>{
   console.log(e)
   res.status(400).send("erreur ,verifier votre connexion internet")
   })
}

exports.patch=async (req,res)=>{

     
   const err = workerModel(req.body).validateSync();
   if(err) return res.status(400).json(err.message)

   const Exist = await workerModel.findOne({id_worker: req.body.matricule});
   if(!Exist) return res.status(400).json('Le l\'employé n\'existe pas');

    try {
          await workerModel.updateOne({_id:req.params.workerId},{$set:req.body})
          res.status(200).json({message: "mise à jour avec success"})
    } catch (error) {
        res.status(400).json({message: "erreur veuillez verifier votre connexion internet", error: error})
    }

    
    }

