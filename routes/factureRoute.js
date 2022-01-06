const express=require("express");
const controller=require("../controllers/factureController");



const routeur=express.Router()

//middlewares
const verify=require("../middlewares/verify");
const permissions =require("..//middlewares/permissions")
//requetes
routeur.get('/',controller.getAll);

routeur.post("/", controller.getSpecific)
routeur.post("/register",[verify,permissions.facture], controller.create);
routeur.delete("/",controller.delete)

//exportation
module.exports=routeur;