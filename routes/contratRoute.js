const express=require('express');
const controller=require("../controllers/contratController");



 const router=express.Router()

//routes

//middlewares

//requetes
router.get('/',controller.getAll);

router.post("/", controller.getSpecific)
router.post("/register", controller.create);
router.delete("/",controller.delete)

//exportation
module.exports=router;