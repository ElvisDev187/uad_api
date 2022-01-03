
const express = require('express');
const controller = require('../controllers/PosteController');

const router = express.Router();



//creer un poste je dois ajouter if exist ici
    
router.post('/register', controller.create );


router.post('/', controller.getSpecific);


router.delete('/:postId', controller.delete);


router.put('/:postId', controller.update);

router.get('/', controller.getAll);

module.exports = router;

