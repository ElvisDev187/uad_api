
const {MODELS} = require('../models/index')
const Poste = MODELS.poste



const ifExist = async (req, res, next)=>{

    // verification si le poste exixte deja
    const postExist = await Poste.findOne({nom_poste: req.body.nom_poste});
    if(postExist) return res.status(400).send('Le poste existe déja');

    next();
}

const MiddlePoste = {
    ifExist: ifExist
}

module.exports.MiddlePoste = MiddlePoste;