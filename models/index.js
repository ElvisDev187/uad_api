const Poste = require('./Poste');
const service = require('./service');
const worker= require('./worker');
const userLogin = require('./userLogin');
const facture=require('./facture');
const customer = require('./customer');
const payment = require('./payment');
const contrat= require("./contrat");
const gerer=require("./gerer");







const MODELS = {
    poste: Poste,
    Service: service,
    worker:worker,
    userLogin: userLogin,
    facture:facture,
    customer: customer,
    payment: payment,
    contrat:contrat,
    gerer:gerer
}

module.exports.MODELS = MODELS;
