const jwt=require("jsonwebtoken");
const {MODELS} = require('../models/index');

module.exports=  async function  (req,res,next){
    const token=req.header('auth-token');
    if(!token) return res.status(401).json("Accès Refusé")
    try{
        const contenue=jwt.verify(token,process.env.TOKEN_KEY);
        req.worker=contenue;

        const poste = await MODELS.poste.findOne({id_poste: req.worker.id_poste});
        req.worker.grade = poste.grade;
    
        next();
    }catch(e){
        console.log(e.message)
        res.status(400).json('token incorrect')
    }
}