const Joi = require('joi');

const posteValidation = data =>{
    const schema = Joi.object({
        nom_poste: Joi.string().min(6).required(),
        salaire: Joi.number().required(),
        grade: Joi.string().min(6).required()

    }).options({abortEarly: false})

    return schema.validate(data)
}

module.exports.posteValidation = posteValidation;