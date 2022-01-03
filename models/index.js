const Poste = require('./Poste');
const service = require('./service');
const worker= require('./worker')







const MODELS = {
    poste: Poste,
    Service: service,
    worker:worker
}

module.exports.MODELS = MODELS;
