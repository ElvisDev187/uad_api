const Poste = require('./Poste');
const service = require('./service');
const worker= require('./worker');
const userLogin = require('./userLogin')
const facture=require('./facture')







const MODELS = {
    poste: Poste,
    Service: service,
    worker:worker,
    userLogin: userLogin,
    facture:facture
}

module.exports.MODELS = MODELS;
