const Joi = require('joi');

const posteValidation = data =>{
    const schema = Joi.object({
        id_poste: Joi.number().required(),
        nom_poste: Joi.string().min(6).required(),
        salaire: Joi.number().required(),
        grade: Joi.string().min(6).required()

    }).options({abortEarly: false})

    return schema.validate(data)
}

module.exports.posteValidation = posteValidation;