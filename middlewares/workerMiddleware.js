const {MODELS}=require("../models/index");
const worker= MODELS.worker
const joi=require("joi");

ifExist = async (req, res, next)=>{

    //verifions si l'employé existe deja
    const this_worker=await workerModel.findOne({matricule:req.body.matricule});
    if(this_worker) return res.status(400).send("le matricule existe deja");

    next();
}

module.exports.middleWorker= {
    ifExist:ifExist
}
