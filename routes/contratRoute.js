const express=require('express');
const controller=require("../controllers/contratController");



 const router=express.Router()

//middlewares
const verify=require("../middlewares/verify");
const permissions =require("..//middlewares/permissions")
//requetes
router.get('/',controller.getAll);
router.get('/:id_worker',controller.getByIdWorker)
router.post("/", controller.getSpecific)
router.post("/register",[verify,permissions.contrat], controller.create);
router.delete("/",controller.delete)

//exportation
module.exports=router;