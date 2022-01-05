const {MODELS}=require("../models/index");
const workerModel= MODELS.worker
const posteModel=MODELS.poste
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

exports.getAll=async (req,res)=>{
    try{
        const result=await workerModel.find()
        res.send(result)
    }catch{
        res.send(e)
    }
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
            const savedUser=await worker.save();
            console.log("reussie")
            res.send(savedUser)
        }catch(e){
            console.log(e.message)
            res.status(400).send("erreur verifier votre connexion internet")
        }

}
exports.login=async (req,res)=>{

    const user = new MODELS.userLogin({
        matricule: req.body.matricule,
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
    const poste=await posteModel.findOne({id_poste:this_worker.id_poste});
    const grade=poste.grade
    const token=jwt.sign({id_worker:this_worker.id_worker,grade:grade  },
                          process.env.TOKEN_KEY);
    res.header("auth-token",token);
    res.send(req.headers)
    }catch(e){
        console.log(e)
        res.status(400).send("erreur ,verifier votre connexion internet")
    }
    

}
exports.delete=async (req,res)=>{
   try{
    const del=await workerModel.deleteMany(req.body)
   res.status(200).json("true")
   }catch{
    console.log(e)
    res.status(400).json("erreur ,verifier votre connexion internet")
   }


}

exports.patch=async (req,res)=>{
    const work=new workerModel(req.body)
    const err = work.validateSync();
    if(err) return res.status(400).json(err.message)


   const Exist = await workerModel.findOne({id_worker: req.params.workerId});
   if(!Exist) return res.status(400).json('Le l\'employé n\'existe pas');
   //on verifie si le mot de passe est là puis on le hash
    if(req.body.mdp){
        const salt= await bcrypt.genSalt(10);
        req.body.mdp= await bcrypt.hash(req.body.mdp,salt);
    }
    try {
          await workerModel.updateMany({id_worker:req.params.workerId},{$set:req.body})
         return res.status(200).json( "mise à jour avec success")
    } catch (error) {
        console.log(error.message)
        return res.status(400).json("erreur veuillez verifier votre connexion internet")
    }

    
    }

