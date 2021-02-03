var express = require('express');
var router = express.Router();

const servController = require("../controllers/serv.controller.js");

//Busqueda
router.get('/', servController.findAll);
router.get('/:id', servController.findOne);

//Anadir
router.post('/save', servController.create);

//Update
router.post('/update', servController.update);

//Delete
router.post('/delete', servController.delete);
module.exports = router;
