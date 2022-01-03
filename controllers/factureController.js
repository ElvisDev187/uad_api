const {MODELS}=require("../models/index")
const factureModel=MODELS.facture
exports.create=async (req,res)=>{
    const facture=new factureModel({
        id_facture:req.body.id_facture,
        id_client:req.body.id_client,
        id_worker:req.body.id_worker,
    })
    const err= facture.validateSync()
    if(err) return res.status(400).json(err.message)

    const Exist = await factureModel.findOne({id_facture: req.body.id_facture});
    if(Exist) return res.status(400).json('La facture existe déjà');

    try{
        const newFacture= await factureModel.create(facture);
        res.status(200).json("true")
        return res.send(newFacture)
    }catch(err){
        console.log(err)
        if(err) return res.status(400).json(err.message)
    }
}

exports.getAll=async (req,res)=>{
        try{
            const result=await factureModel.find()
            res.status(200).json(result)

        }catch{
            res.status(400).json("erreur de connexion")
        }
}
exports.getSpecific=async (req,res)=>{
    try{
        const result=await factureModel.find(req.body)
        res.status(200).json("true")
    }catch{
        res.status(400).json("erreur de connexion")
    }
}

exports.delete=async (req,res)=>{
    const facts=factureModel.find(req.body)
    if(!facts) return res.status(400).json("suppression impossible rien ne correspond")
    try{
     const del=await factureModel.deleteMany(req.body)
    res.status(200).json("true")
    }catch{
     console.log(e)
     res.status(400).json("erreur ,verifier votre connexion internet")
    }

 }
 
 