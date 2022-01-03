const express=require("express");
const controller=require("../controllers/factureController");



const routeur=express.Router()

//routes

//middlewares

//requetes
routeur.get('/',controller.getAll);

routeur.post("/", controller.getSpecific)
routeur.post("/register", controller.create);
routeur.delete("/",controller.delete)

//exportation
module.exports=routeur;