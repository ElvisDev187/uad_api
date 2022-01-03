const express=require("express");
const controller=require("../controllers/workerController");



const routeur=express.Router()

//routes

//middlewares

//requetes
routeur.get('/',controller.getAll);

routeur.post("/", controller.getSpecific)
routeur.post("/register", controller.register);

routeur.post("/login",controller.login)
routeur.delete("/:workerId",controller.delete)

routeur.patch("/:workerId",controller.patch)

//exportation
module.exports=routeur;
