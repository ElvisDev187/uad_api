const express=require('express');
const controller=require("../controllers/contratController");



 const router=express.Router()

//middlewares
const verify=require("../middlewares/verify");
const ACCESS=require("../middlewares/accessRoute");
const permissions =require("..//middlewares/permissions")
//requetes
router.get('/',[verify,ACCESS.contrat],controller.getAll);
router.get('/:id_worker',controller.getByIdWorker)
router.post("/",[verify,ACCESS.contrat], controller.getSpecific)
router.post("/register",[verify,permissions.contrat], controller.create);
router.delete("/",[verify,ACCESS.contrat],controller.delete)

//exportation
module.exports=router;