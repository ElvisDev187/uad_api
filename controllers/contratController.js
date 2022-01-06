const {MODELS}=require("../models/index")
const contratModel=MODELS.contrat
exports.create=async (req,res)=>{
    const contrat=new contratModel({
        id_contrat:req.body.id_contrat,
        id_facture:req.body.id_facture,
        id_service:req.body.id_service,
        id_client:req.body.id_client,
        libelle:req.body.libelle,
        montant:req.body.montant,
        statut:req.body.statut
    })
    const err= contrat.validateSync()
    if(err) return res.status(400).json(err.message)

    const Exist = await contratModel.findOne({id_contrat: req.body.id_contrat});
    if(Exist) return res.status(400).json('Le contrat existe déjà');

    try{
        const newcontrat= await contratModel.create(contrat);
        res.status(200).json(newcontrat)
    }catch(err){
        console.log(err)
        return res.status(400).json("problème de connexion")
    }
}

exports.getAll=async (req,res)=>{
        try{
            const result=await contratModel.find()
            res.status(200).json(result)

        }catch(e){
            console.log(e.message)
            res.status(400).json("erreur de connexion")
        }
}
exports.getSpecific=async (req,res)=>{
    try{
        const result=await contratModel.find(req.body)
        res.status(200).json(result)
    }catch(e){
        console.log(e.message)
        res.status(400).json("erreur de connexion")
    }
}

exports.delete=async (req,res)=>{
    const facts=contratModel.find(req.body)
    if(!facts) return res.status(400).json("suppression impossible rien ne correspond")
    try{
     const del=await contratModel.deleteMany(req.body)
    res.status(200).json("true")
    }catch(e){
     console.log(e.message)
     res.status(400).json("erreur ,verifier votre connexion internet")
    }

 }
 
 exports.getByIdWorker=async (req, res)=>{
    try{

        //on va maintenant chercher les projets faits par cet employé
        const gerers=await MODELS.gerer.find({id_chef:req.params.id_worker});
        //on cree un tableau de contrat qui contiendra les contrats extrait des projets
        let contrats=new Array();
        //on inserre les contrats dans le tableau
        for(gerer of gerers){
            const item= await MODELS.contrat.findOne({id_contrat:gerer.id_contrat}) 
            if(!contrats.includes(item)){
                contrats.push(item)
            }
        }
        res.send(contrats)
    }catch(e){
        console.log(e)
        res.status(400).json("erreur:"+ e)
    }
}

    