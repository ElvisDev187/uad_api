const express = require('express');
const controller = require('../controllers/customerController');

//middlewares
const verify=require("../middlewares/verify")
const ACCESS=require("../middlewares/accessRoute")

//requetes
const router = express.Router();

router.get('/',[verify,ACCESS.client], controller.getAll);

router.post('/',[verify,ACCESS.client], controller.getSpecific);

router.post('/register', controller.create);

router.get('/:id_worker',controller.getByIdWorker);

module.exports = router;