const {MODELS}=require("../models/index")
const gererModel=MODELS.gerer
exports.create=async (req,res)=>{
    const gerer=new gererModel({
        id_assistant:req.body.id_assistant,
        id_contrat:req.body.id_contrat,
        id_chef:req.body.id_chef,
        fonction:req.body.fonction
    })
    const err= gerer.validateSync()
    if(err) return res.status(400).json(err.message)

    const Exist = await gererModel.findOne({id_assistant: req.body.id_assistant});
    if(Exist) return res.status(400).json('cette assistance de projet existe déjà');

    try{
        const newgerer= await gererModel.create(gerer);
        res.status(200).json(newgerer)
    }catch(err){
        console.log(err)
        return res.status(400).json("problème de connexion")
    }
}

exports.getAll=async (req,res)=>{
        try{
            const result=await gererModel.find()
            res.status(200).json(result)

        }catch(e){
            console.log(e.message)
            res.status(400).json("erreur de connexion")
        }
}
exports.getSpecific=async (req,res)=>{
    try{
        const result=await gererModel.find(req.body)
        res.status(200).json(result)
    }catch(e){
        console.log(e.message)
        res.status(400).json("erreur de connexion")
    }
}

exports.delete=async (req,res)=>{
    const facts=gererModel.find(req.body)
    if(!facts) return res.status(400).json("suppression impossible rien ne correspond")
    try{
     const del=await gererModel.deleteMany(req.body)
    res.status(200).json("true")
    }catch(e){
     console.log(e.message)
     res.status(400).json("erreur ,verifier votre connexion internet")
    }

 }
 