const express = require('express');
const router = express.Router();
const controller = require('../controllers/seviceController')

router.get('/', controller.getAll);

router.post('/', controller.getSpecific);

router.post('/register', controller.create);

router.delete('/:serviceId', controller.delete);

router.patch('/:serviceId', controller.update);

module.exports = router;




