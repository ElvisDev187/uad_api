
const express = require('express');
const controller = require('../controllers/PosteController');

const router = express.Router();



//creer un poste je dois ajouter if exist ici
    
router.post('/register', controller.create );

router.get('/:postName', controller.getByName);

router.get('/:postId', controller.getById);


router.delete('/:postId', controller.delete);


router.patch('/:postId', controller.update);

router.get('/', controller.getAll);

module.exports = router;

