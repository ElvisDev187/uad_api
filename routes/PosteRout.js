
const express = require('express');
const controller = require('../controllers/PosteController');

const router = express.Router();


//middlewares
const verify=require("../middlewares/verify");
const ACCESS=require("../middlewares/accessRoute");
//creer un poste je dois ajouter if exist ici
    
router.post('/register', controller.create );


router.post('/',[verify,ACCESS.poste], controller.getSpecific);


router.delete('/:postId',[verify,ACCESS.poste], controller.delete);


router.put('/:postId',[verify,ACCESS.poste], controller.update);

router.get('/',[verify,ACCESS.poste], controller.getAll);

module.exports = router;

