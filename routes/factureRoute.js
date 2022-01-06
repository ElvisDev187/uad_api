const express=require("express");
const controller=require("../controllers/factureController");



const routeur=express.Router()

//middlewares
const verify=require("../middlewares/verify");
const ACCESS=require("../middlewares/accessRoute");
const permissions =require("..//middlewares/permissions")
//requetes
routeur.get('/',[verify,ACCESS.facture],controller.getAll);

routeur.post("/",[verify,ACCESS.facture], controller.getSpecific)
routeur.post("/register",[verify,permissions.facture], controller.create);
routeur.delete("/",[verify,ACCESS.facture],controller.delete)

//exportation
module.exports=routeur;