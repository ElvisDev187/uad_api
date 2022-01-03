const express = require('express');
const controller = require('../controllers/customerController');

const router = express.Router();

router.get('/', controller.getAll);

router.post('/', controller.getSpecific);

router.post('/register', controller.create);

module.exports = router;