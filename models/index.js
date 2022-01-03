const Poste = require('./Poste');
const service = require('./service');
const worker= require('./worker');
const userLogin = require('./userLogin')







const MODELS = {
    poste: Poste,
    Service: service,
    worker:worker,
    userLogin: userLogin
}

module.exports.MODELS = MODELS;
