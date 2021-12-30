
const {posteValidation} = require('../validations/posteValidation');
const {MODELS} = require('../models/index')
const Poste = MODELS.poste

const validate = (req, res, next)=>{
    
    // validation
    const {error} =  posteValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    next();
    

    
}


const ifExist = async (req, res, next)=>{

    // verification si le poste exixte deja
    const postExist = await Poste.findOne({nom_poste: req.body.nom_poste});
    if(postExist) return res.status(400).send('Le poste existe déja');

    next();
}

const MiddlePoste = {
    validate: validate,
    ifExist: ifExist
}

module.exports.MiddlePoste = MiddlePoste;