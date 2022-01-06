const express=require("express");
const controller=require("../controllers/workerController");




const routeur=express.Router()

//routes

//middlewares
const verify=require("../middlewares/verify");
const ACCESS=require("../middlewares/accessRoute");
//requetes
routeur.get('/',[verify,ACCESS.worker],controller.getAll);

routeur.post("/",[verify,ACCESS.worker], controller.getSpecific)
routeur.delete("/",[verify,ACCESS.worker],controller.delete)

routeur.patch("/:workerId",[verify,ACCESS.worker],controller.patch)
routeur.post("/register", controller.register);

routeur.post("/login",controller.login)


//exportation
module.exports=routeur;
