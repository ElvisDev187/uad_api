const joi=require("joi");


exports.workerRegisterValidation = function (data){
const schema=joi.object({
    id_worker:joi.string().required(),
    id_poste:joi.string().required(),
    nom:joi.string().min(4).required(),
    prenom:joi.string().required(),
    tel:joi.number().min(6).required(),
    matricule:joi.string().required(),
    mdp:joi.string().alphanum().min(7).required(),
    statut:joi.boolean().required()
});

return schema.validate(data);

}

exports.workerLoginValidation =function (data){
    const schema=joi.object({
        matricule:joi.string().required(),
        mdp:joi.string().alphanum().min(7).required()
    });
    return schema.validate(data);
    
    
    }

