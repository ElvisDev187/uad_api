const express=require("express");
const controller=require("../controllers/workerController");
const {middleWorker}=require("../middlewares/workerMiddleware")


routeur=express.Router()

//routes

//middlewares

//requetes
routeur.get('/',controller.getAll);

routeur.post("/", controller.getSpecific)
routeur.post("/register",[middleWorker.ifExist], controller.register);

routeur.post("/login",controller.login)
routeur.delete("/",controller.delete)

routeur.patch("/:workerId",[middleWorker.ifExist],controller.patch)

//exportation
module.exports=routeur;
