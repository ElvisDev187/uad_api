const express=require("express");
const controller=require("../controllers/paymentController");



 const routeur=express.Router()

routeur.get('/', controller.getAll);

routeur.post('/', controller.getSpecific);

routeur.post('/register', controller.create);

module.exports = routeur;